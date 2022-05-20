import joi from "joi";

export const clinicSignInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const clinicSignUpSchema = joi.object({
    name: joi.string().required(),
    cnpj: joi.string().length(14).required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});