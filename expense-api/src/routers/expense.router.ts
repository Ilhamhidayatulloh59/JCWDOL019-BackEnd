import { Router } from "express";
import { ExpenseController } from "../controllers/expense.controller";

export class ExpenseRouter {
  private router: Router;
  private expenseController: ExpenseController;

  constructor() {
    this.router = Router();
    this.expenseController = new ExpenseController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.expenseController.getExpense);

    // add another route here
  }

  getRouter(): Router {
    return this.router;
  }
}
