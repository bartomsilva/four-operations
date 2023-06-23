import { Request, Response } from "express";
import { TSquareArea } from "../types";

export const squareArea = (req: Request, res: Response) => {
  try {
    const { side }: TSquareArea = req.body;
    if (side === undefined) {
      res.status(400);
      throw new Error("Invalid data. Try again.");
    }
    if (typeof side !== "number") {
      res.status(422);
      throw new Error("Invalid type. The side must be a number.");
    }
    if (side <= 0) {
      res.status(400);
      throw new Error("The side must be greater than 0.");
    }
    const squareArea = side * side;
    res.status(200).send(squareArea.toFixed(2));
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Unexpected error.");
    }
  }
};
