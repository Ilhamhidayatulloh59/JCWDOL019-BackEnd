import exprees, { Application, Request, Response } from "express";
import { UserRouter } from "./routers/user.router";

const PORT: number = 8000;

const app: Application = exprees();
app.use(exprees.json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome to my API" });
});

const userRouter = new UserRouter();
app.use("/api/users", userRouter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running on : http://localhost:${PORT}/api`);
});
