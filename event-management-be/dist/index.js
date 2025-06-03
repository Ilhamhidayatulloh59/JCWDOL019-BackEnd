"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./routers/user.router");
const auth_router_1 = require("./routers/auth.router");
const cors_1 = __importDefault(require("cors"));
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/api", (req, res) => {
    res.status(200).send({ message: "welcome to my api" });
});
const authRouter = new auth_router_1.AuthRouter();
app.use("/api/auth", authRouter.getRouter());
const userRouter = new user_router_1.UserRouter();
app.use("/api/users", userRouter.getRouter());
app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}/api`);
});
