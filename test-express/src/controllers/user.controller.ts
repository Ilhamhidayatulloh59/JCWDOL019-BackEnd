import { Request, Response } from "express";
import prisma from "../prisma";

export class UserController {
  async getUser(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).send({ users });
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
