import { Request, Response } from "express";
import pool from "../config/db";

export class ExpenseV2Controller {
  async getExpense(req: Request, res: Response) {
    try {
      const { rows } = await pool.query("select * from expense");

      res.status(200).send({
        message: "Data Expense ✅",
        expense: rows,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
