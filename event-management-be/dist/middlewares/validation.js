"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
exports.validateRegister = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Full name required"),
    (0, express_validator_1.body)("email")
        .notEmpty()
        .withMessage("email required")
        .isEmail()
        .withMessage("invalid email format"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("password required"),
    (req, res, next) => {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            res.status(400).send({ errors: error.array() });
            return;
        }
        next();
    },
];
