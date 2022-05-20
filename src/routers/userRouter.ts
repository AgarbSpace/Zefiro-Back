import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { userSignInSchema, userSignUpSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.post("/", validateSchemaMiddleware(userSignInSchema));
userRouter.post("/signUp", validateSchemaMiddleware(userSignUpSchema));

export default userRouter;