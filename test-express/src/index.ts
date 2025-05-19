import express, { Application, Request, Response } from "express";
import cron from "node-cron";
import { PostRouter } from "./routers/post.router";

const PORT: number = 8000;

const app: Application = express();

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome to my API" });
});

const postRouter = new PostRouter();
app.use("/api/posts", postRouter.getRouter());

// scheduler
// cron.schedule("0 10 * * *", () => {
//   console.log("Hello World");
// });

app.listen(PORT, () => {
  console.log(`Server running on : http://localhost:${PORT}/api`);
});
