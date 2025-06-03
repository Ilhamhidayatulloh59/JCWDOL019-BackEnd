import { compare, genSalt, hash } from "bcrypt";
import { Request, Response } from "express";
import prisma from "../prisma";
import { sign } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { tranporter } from "../helpers/mailer";
import referralCodes from "referral-codes";

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const {
        name,
        email,
        password,
        referralCode: inputReferralCode,
      } = req.body;

      const generatedReferralCode = referralCodes.generate({
        length: 8,
        count: 1,
      });
      const salt = await genSalt(10);
      const hashPass = await hash(password, salt);

      const referredByUser = inputReferralCode
        ? await prisma.user.findUnique({
            where: { referralCode: inputReferralCode },
          })
        : null;

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashPass,
          referralCode: generatedReferralCode[0],
          referredBy: referredByUser?.referralCode || null,
        },
      });

      const payload = { id: newUser.id };
      const token = sign(payload, process.env.SECRET_KEY_VERIFY!, {
        expiresIn: "10m",
      });

      const expiredAt = new Date(Date.now() + 10 * 60 * 1000);

      await prisma.emailVerification.create({
        data: { userId: newUser.id, token, expiresAt: expiredAt },
      });

      const templatePath = path.join(__dirname, "../templates", "verify.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        name: newUser.name,
        link: `http://localhost:3000/verify/${token}`,
      });

      await tranporter.sendMail({
        from: process.env.GMAIL_USER,
        to: newUser.email,
        subject: "Eventin User Verification Email",
        html,
      });

      if (referredByUser) {
        const now = new Date();
        const expiry = new Date(now);
        expiry.setMonth(expiry.getMonth() + 3);

        await prisma.referralPoint.create({
          data: {
            userId: referredByUser.id,
            sourceUserId: newUser.id,
            points: 10000,
            expiresAt: expiry,
          },
        });

        await prisma.userDiscount.create({
          data: {
            userId: newUser.id,
            referralCode: referredByUser.referralCode,
            discount: 0.1,
            expiresAt: expiry,
          },
        });
      }

      res.status(201).send({ message: "Register Successfully!" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
          avatar: true,
          role: true,
        },
      });

      if (!user) throw { message: "user not found" };

      const isValidPass = await compare(password, user.password);

      if (!isValidPass) throw { message: "invalid password" };

      const payload = { id: user.id, role: user.role };
      const token = sign(payload, process.env.SECRET_KEY!, {
        expiresIn: "10m",
      });

      res.status(201).send({ message: "Login Successfully!", user, token });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async verify(req: Request, res: Response) {
    try {
      const { id } = res.locals?.user;
      const token = res.locals?.token;

      const data = await prisma.emailVerification.findFirst({
        where: { token, userId: id },
      });

      if (!data) throw { message: "Invalid link verification" };

      await prisma.user.update({
        data: { isVerified: true },
        where: { id },
      });

      await prisma.emailVerification.delete({ where: { id: data.id } });

      res.status(200).send({ message: "Verification Succesfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
