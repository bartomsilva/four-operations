import { Request, Response } from "express";
import { TSquareArea } from "../types";
import { z } from "zod";
import { handlerError } from "./handlerError";

export const squareArea = (req: Request<{}, {}, TSquareArea>, res: Response) => {
    try {
        const schema = z.object({
            valueA: z.number({
                required_error: "'valueA' is required.",
                invalid_type_error: "'valueA' must be of numeric type.",
            }).min(1, "'valueA' must be higher then zero"),
        });

        schema.parse(req.body);

        const { valueA } = req.body;

        const result = (valueA **2).toFixed(2);

        res.status(200).json(+result);
        
    } catch (error) {
        handlerError(res, error);
    }
}