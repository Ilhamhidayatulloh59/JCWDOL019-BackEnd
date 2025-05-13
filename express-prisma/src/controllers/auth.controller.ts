import { compare, genSalt, hash } from "bcrypt";
import { Request, Response } from "express";
import prisma from "../prisma";
import { sign } from "jsonwebtoken";

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;

      const salt = await genSalt(10);
      const hashPass = await hash(password, salt);

      await prisma.user.create({
        data: { username, email, password: hashPass },
      });

      res.status(201).send({ message: "Register Succesfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { login, password } = req.body;

      const user = await prisma.user.findFirst({
        where: { OR: [{ username: login }, { email: login }] },
        select: { id: true, username: true, email: true, password: true, avatar: true },
      });

      if (!user) throw { message: "Account not found!" };

      const isValidPass = await compare(password, user.password);
      if (!isValidPass) throw { message: "Invalid Password" };

      const payload = { id: user.id, role: "user" };
      const token = sign(payload, process.env.SECRET_KEY!, {
        expiresIn: "1h",
      });

      res.status(200).send({ message: "Login Succesfully", user, token });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
