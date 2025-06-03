import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateRegister = [
  body("name").notEmpty().withMessage("Full name required"),
  body("email")
    .notEmpty()
    .withMessage("email required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password required"),

  (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      res.status(400).send({ errors: error.array() });
      return;
    }
    next();
  },
];
