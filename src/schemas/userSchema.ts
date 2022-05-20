import joi from "joi";

export const userSignInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const userSignUpSchema = joi.object({
    name: joi.string().required(),
    cpf: joi.string().length(11).required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});