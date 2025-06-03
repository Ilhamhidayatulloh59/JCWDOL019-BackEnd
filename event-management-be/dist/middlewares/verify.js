"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenVerication = exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        res.status(401).send({ message: "Unauthorize" });
        return;
    }
    (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            if (err instanceof jsonwebtoken_1.TokenExpiredError) {
                res.status(401).send({ message: "Token Expired" });
            }
            else {
                res.status(401).send({ message: "Invalid token" });
            }
            return;
        }
        res.locals.user = payload;
        next();
    });
};
exports.verifyToken = verifyToken;
const verifyTokenVerication = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        res.status(401).send({ message: "Unauthorize!" });
        return;
    }
    (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY_VERIFY, (err, payload) => {
        if (err) {
            if (err instanceof jsonwebtoken_1.TokenExpiredError) {
                res.status(401).send({ message: "Token Expired" });
            }
            else {
                res.status(401).send({ message: "Invalid token" });
            }
            return;
        }
        res.locals.user = payload;
        res.locals.token = token;
        next();
    });
};
exports.verifyTokenVerication = verifyTokenVerication;
