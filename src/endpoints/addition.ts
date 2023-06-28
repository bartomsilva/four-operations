import { Request, Response } from "express";
import z from 'zod'
import { handlerError } from "./handlerError";
import { TOperation } from "../types";

export const addition = (req: Request<{}, {}, TOperation>, res: Response) => {
    try {
        const schema = z.object({
            valueA: z.number({
              required_error: "'valueA' is required.",
              invalid_type_error: "'valueA' must be of numeric type.",
            }),
            valueB: z.number({
              required_error: "'valueB' is required.",
              invalid_type_error: "'valueB' must be of numeric type.",
            }),
            operator: z.string({
                required_error: "'operator' is required.",
                invalid_type_error: "'operator' must be of string type.",
            }).regex(/^[\+]+$/),
        });

        schema.parse(req.body);

        const { valueA, valueB, operator } = req.body;

        res.status(200).json(eval(valueA + operator + valueB));

    } catch (error) {
        handlerError(res, error);
    }
}