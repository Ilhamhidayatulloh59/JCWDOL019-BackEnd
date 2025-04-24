import { Request, Response } from "express";
import fs from "fs";
import { IUser } from "../types/user";

export class UserController {
  getUsers(req: Request, res: Response) {
    const users: IUser[] = JSON.parse(
      fs.readFileSync("./data/users.json", "utf-8")
    );

    res.status(200).send({
      message: "Data users",
      users,
    });
  }

  getUserId(req: Request, res: Response) {
    const { id } = req.params;
    const users: IUser[] = JSON.parse(
      fs.readFileSync("./data/users.json", "utf-8")
    );

    const user: IUser | undefined = users.find((item) => item.id == +id);

    if (!user) {
      res.status(400).send({ message: "User not found" });
      return;
    }

    res.status(200).send({
      message: `User detail with id ${id}`,
      user,
    });
  }
}
