import { Request, Response } from "express";
import pool from "../config/db";

export class ExpenseV2Controller {
  async getExpense(req: Request, res: Response) {
    try {
      const { rows } = await pool.query(
        "select * from expense order by id asc"
      );

      res.status(200).send({
        message: "Data Expense ✅",
        expense: rows,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getExpenseId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { rows, rowCount } = await pool.query(
        `select * from expense where id = ${id}`
      );

      if (rowCount == 0) throw { message: "Expense not found" };

      res.status(200).send({
        message: "Expense Detail",
        data: rows[0],
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async createExpense(req: Request, res: Response) {
    try {
      const { title, nominal, type, category, date } = req.body;
      await pool.query(`
        insert into expense (title, nominal, type, category, date) 
        values ('${title}', ${nominal}, '${type}', '${category}', '${date}')
      `);
      res.status(201).send({ message: "Expense Created !" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async editExpense(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const query: string[] = [];

      for (let key in req.body) {
        query.push(`${key} = '${req.body[key]}'`);
      }

      await pool.query(`
        update expense
        set ${query.join(", ")}
        where id = ${id}
      `);
      res.status(200).send({ message: "Expense Updated !" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async deleteExpense(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await pool.query(`delete from expense where id = ${id}`);
      res.status(200).send({ message: "Expense Deleted !" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
