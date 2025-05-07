import { Request, Response } from "express";
import prisma from "../prisma";

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      await prisma.user.create({ data: { username, email, password } });
      res.status(201).send({ message: "User created !" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).send({
        message: "Data user",
        users,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
