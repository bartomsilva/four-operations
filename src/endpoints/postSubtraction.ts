import { Request, Response } from "express";

export const postSubtraction = (req: Request, res: Response) => {

    try {
        
        const { minuendo, subtraendo } = req.body
    
        if (minuendo === undefined || subtraendo === undefined) {
            res.status(400)
            throw new Error("enter all the necessary data, try again!");

        } else if (typeof minuendo !== "number" || typeof subtraendo !== "number") {
            res.status(400)
            throw new Error("value must be a number, try again!");
        }
        const result = minuendo - subtraendo
        res.status(200).json(result)

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500)
        }
        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error")
        }
    }
}