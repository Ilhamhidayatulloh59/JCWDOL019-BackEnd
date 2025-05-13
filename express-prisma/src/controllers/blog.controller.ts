import { Request, Response } from "express";
import prisma from "../prisma";

export class BlogController {
  async createBlog(req: Request, res: Response) {
    try {
      const userId = res.locals?.user?.id;
      const { title, thumbnail, category, content } = req.body;
      await prisma.blog.create({
        data: { title, thumbnail, category, content, userId },
      });

      res.status(201).send({ message: "Blog created" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getBlogs(req: Request, res: Response) {
    try {
      const blogs = await prisma.blog.findMany({
        include: { user: true },
      });

      res.status(200).send({ message: "Blog Data", blogs });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
