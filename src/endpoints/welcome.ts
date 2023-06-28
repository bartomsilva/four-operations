import { Request, Response } from "express";
import { handlerError } from "./handlerError";

export const welcome = (req: Request, res: Response) => {
    try {
        res.send("Wellcome! four operations online.");
    } catch (error) {
      handlerError(res, error);
    }
}
