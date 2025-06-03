"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const referral_codes_1 = __importDefault(require("referral-codes"));
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password, referralCode: inputReferralCode, } = req.body;
                const generatedReferralCode = referral_codes_1.default.generate({
                    length: 8,
                    count: 1,
                });
                const referredByUser = inputReferralCode
                    ? yield prisma_1.default.user.findUnique({
                        where: { referralCode: inputReferralCode },
                    })
                    : null;
                const newUser = yield prisma_1.default.user.create({
                    data: {
                        name,
                        email,
                        password,
                        referralCode: generatedReferralCode[0],
                        referredBy: (referredByUser === null || referredByUser === void 0 ? void 0 : referredByUser.referralCode) || null,
                    },
                });
                if (referredByUser) {
                    const now = new Date();
                    const expiry = new Date(now);
                    expiry.setMonth(expiry.getMonth() + 3);
                    yield prisma_1.default.referralPoint.create({
                        data: {
                            userId: referredByUser.id,
                            sourceUserId: newUser.id,
                            points: 10000,
                            expiresAt: expiry,
                        },
                    });
                    yield prisma_1.default.userDiscount.create({
                        data: {
                            userId: newUser.id,
                            referralCode: referredByUser.referralCode,
                            discount: 0.1,
                            expiresAt: expiry,
                        },
                    });
                }
                res.status(201).send({ message: "user created" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield prisma_1.default.user.findMany();
                res.status(200).send({ message: "Data Users :", users });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield prisma_1.default.user.findUnique({ where: { id: +id } });
                res.status(200).send({
                    message: `Data user with id ${id}`,
                    user,
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    editUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = res.locals.user;
                yield prisma_1.default.user.update({
                    where: { id: +id },
                    data: req.body,
                });
                res.status(200).send({
                    message: "User edited",
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.user.delete({ where: { id: +id } });
                res.status(200).send({
                    message: "User deleted",
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.UserController = UserController;
