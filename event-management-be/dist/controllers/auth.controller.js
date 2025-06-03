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
exports.AuthController = void 0;
const bcrypt_1 = require("bcrypt");
const prisma_1 = __importDefault(require("../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const mailer_1 = require("../helpers/mailer");
const referral_codes_1 = __importDefault(require("referral-codes"));
class AuthController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password, referralCode: inputReferralCode, } = req.body;
                const generatedReferralCode = referral_codes_1.default.generate({
                    length: 8,
                    count: 1,
                });
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashPass = yield (0, bcrypt_1.hash)(password, salt);
                const referredByUser = inputReferralCode
                    ? yield prisma_1.default.user.findUnique({
                        where: { referralCode: inputReferralCode },
                    })
                    : null;
                const newUser = yield prisma_1.default.user.create({
                    data: {
                        name,
                        email,
                        password: hashPass,
                        referralCode: generatedReferralCode[0],
                        referredBy: (referredByUser === null || referredByUser === void 0 ? void 0 : referredByUser.referralCode) || null,
                    },
                });
                const payload = { id: newUser.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.SECRET_KEY_VERIFY, {
                    expiresIn: "10m",
                });
                const expiredAt = new Date(Date.now() + 10 * 60 * 1000);
                yield prisma_1.default.emailVerification.create({
                    data: { userId: newUser.id, token, expiresAt: expiredAt },
                });
                const templatePath = path_1.default.join(__dirname, "../templates", "verify.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({
                    name: newUser.name,
                    link: `http://localhost:3000/verify/${token}`,
                });
                yield mailer_1.tranporter.sendMail({
                    from: process.env.GMAIL_USER,
                    to: newUser.email,
                    subject: "Eventin User Verification Email",
                    html,
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
                res.status(201).send({ message: "Register Successfully!" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield prisma_1.default.user.findUnique({
                    where: { email },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        password: true,
                        avatar: true,
                        role: true,
                    },
                });
                if (!user)
                    throw { message: "user not found" };
                const isValidPass = yield (0, bcrypt_1.compare)(password, user.password);
                if (!isValidPass)
                    throw { message: "invalid password" };
                const payload = { id: user.id, role: user.role };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.SECRET_KEY, {
                    expiresIn: "10m",
                });
                res.status(201).send({ message: "Login Successfully!", user, token });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    verify(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const { id } = (_a = res.locals) === null || _a === void 0 ? void 0 : _a.user;
                const token = (_b = res.locals) === null || _b === void 0 ? void 0 : _b.token;
                const data = yield prisma_1.default.emailVerification.findFirst({
                    where: { token, userId: id },
                });
                if (!data)
                    throw { message: "Invalid link verification" };
                yield prisma_1.default.user.update({
                    data: { isVerified: true },
                    where: { id },
                });
                yield prisma_1.default.emailVerification.delete({ where: { id: data.id } });
                res.status(200).send({ message: "Verification Succesfully" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.AuthController = AuthController;
