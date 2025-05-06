import { Router } from "express";
import { ExpenseV2Controller } from "../controllers/expenseV2.controller";

export class ExpenseV2Router {
  private router: Router;
  private expenseV2Controller: ExpenseV2Controller;

  constructor() {
    this.router = Router();
    this.expenseV2Controller = new ExpenseV2Controller();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.expenseV2Controller.getExpense);
    this.router.post("/", this.expenseV2Controller.createExpense);

    this.router.get("/:id", this.expenseV2Controller.getExpenseId);
    this.router.patch("/:id", this.expenseV2Controller.editExpense);
    this.router.delete("/:id", this.expenseV2Controller.deleteExpense);
  }

  getRouter(): Router {
    return this.router;
  }
}
