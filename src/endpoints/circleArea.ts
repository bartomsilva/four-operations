import { Request, Response } from "express";
import { TCircleArea } from "../types";

export const circleArea = (req: Request, res: Response) => {
  try {
    const { radius }: TCircleArea = req.body;
    if (radius === undefined) {
      res.status(400);
      throw new Error("Invalid data. Try again.");
    }
    if (typeof radius !== "number") {
      res.status(400);
      throw new Error("The radius must be a number. Try again.");
    }
    if (radius < 0) {
      res.status(400);
      throw new Error("The radius must be a positive number. Try again.");
    }
    const circleArea = Math.PI * radius ** 2;
    res
      .status(200)
      .send(
        `The circle's area with a radius equal to ${radius} is ${circleArea.toFixed(
          3
        )}.`
      );
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Internal server error.");
    }
  }
};
