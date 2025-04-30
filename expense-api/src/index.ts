import "dotenv/config";
import express, { Application, Request, Response } from "express";
import { ExpenseRouter } from "./routers/expense.router";
import { ExpenseV2Router } from "./routers/expenseV2.router";

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome to my API" });
});

const expenseRouter = new ExpenseRouter();
app.use("/api/expense", expenseRouter.getRouter());

const expenseV2Router = new ExpenseV2Router();
app.use("/api/v2/expense", expenseV2Router.getRouter());

app.listen(PORT, () => {
  console.log(`server running on : http://localhost:${PORT}/api`);
});
