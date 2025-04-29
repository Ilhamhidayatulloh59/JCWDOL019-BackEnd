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

  createUser(req: Request, res: Response) {
    const users: IUser[] = JSON.parse(
      fs.readFileSync("./data/users.json", "utf-8")
    );
    const maxId: number = Math.max(...users.map((item) => item.id));
    const id = users.length == 0 ? 1 : maxId + 1;
    const { name, email } = req.body;
    const newUser: IUser = { id, name, email };
    users.push(newUser);

    fs.writeFileSync("./data/users.json", JSON.stringify(users), "utf-8");

    res.status(201).send({
      message: "Create users successfully!",
      user: newUser,
    });
  }

  deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const users: IUser[] = JSON.parse(
      fs.readFileSync("./data/users.json", "utf-8")
    );
    const idx = users.findIndex((item) => item.id == +id);
    if (idx == -1) {
      res.status(400).send({ message: "User not found!" });
      return;
    }
    users.splice(idx, 1);

    fs.writeFileSync("./data/users.json", JSON.stringify(users), "utf-8");

    res.status(200).send({ message: `User with id ${id} has been deleted!` });
  }

  updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const users: IUser[] = JSON.parse(
      fs.readFileSync("./data/users.json", "utf-8")
    );
    const idx = users.findIndex((item) => item.id == +id);
    if (idx == -1) {
      res.status(400).send({ message: "User not found!" });
      return;
    }

    const fields = ["name", "email"];
    const isValid = Object.keys(req.body).every((key) => fields.includes(key));
    if (!isValid) {
      res.status(400).send({ message: "Invalid Field in body" });
      return;
    }

    users[idx] = { ...users[idx], ...req.body };

    fs.writeFileSync("./data/users.json", JSON.stringify(users), "utf-8");

    res.status(200).send({ message: `User with id ${id} has been updated!` });
  }
}
