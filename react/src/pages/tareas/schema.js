import Joi from "joi";

export const schema = Joi.object({
    titulo: Joi.string().required().messages({
        "string.empty": `Campo Requerido`,
    }),
    descripcion: Joi.string().required().messages({
        "string.empty": `Campo Requerido`,
    }),
    creador: Joi.string().required().messages({
        "string.empty": `Campo Requerido`,
    }),
    likes: Joi.number().integer().required().precision(1).messages({
        "number.base": `Campo invalido`,
        // "number.positive": `Campo no es positivo `,
    }),
});
