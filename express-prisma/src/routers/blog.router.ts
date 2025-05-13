import { Router } from "express";
import { BlogController } from "../controllers/blog.controller";
import { verifyToken } from "../middlewares/verify";

export class BlogRouter {
  private router: Router;
  private blogController: BlogController;

  constructor() {
    this.router = Router();
    this.blogController = new BlogController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.blogController.getBlogs);
    this.router.post("/", verifyToken, this.blogController.createBlog);
  }

  getRouter(): Router {
    return this.router;
  }
}
