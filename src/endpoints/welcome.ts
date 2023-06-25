import { Request, Response } from "express";

export const welcome = (req: Request, res: Response) => {
    try {
        res.send("Wellcome! four operations online.");
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        } else {
            res.send("Unknown error, report to administrator.");
        }
    }
}