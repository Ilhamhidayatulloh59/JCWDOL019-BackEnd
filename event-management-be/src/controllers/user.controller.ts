import { Request, Response } from "express";
import prisma from "../prisma";
import referralCodes from "referral-codes";

export class UserController {
  async createUser(req: Request, res: Response) {
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

      const referredByUser = inputReferralCode
        ? await prisma.user.findUnique({
            where: { referralCode: inputReferralCode },
          })
        : null;

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
          referralCode: generatedReferralCode[0],
          referredBy: referredByUser?.referralCode || null,
        },
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

      res.status(201).send({ message: "user created" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).send({ message: "Data Users :", users });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getUserId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({ where: { id: +id } });

      res.status(200).send({
        message: `Data user with id ${id}`,
        user,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async editUser(req: Request, res: Response) {
    try {
      const { id } = res.locals.user;
      await prisma.user.update({
        where: { id: +id },
        data: req.body,
      });

      res.status(200).send({
        message: "User edited",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.user.delete({ where: { id: +id } });
      res.status(200).send({
        message: "User deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
