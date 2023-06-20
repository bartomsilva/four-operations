import { Request, Response } from "express";

export const creatAddition = (req: Request, res: Response) => {
  try {
    const { firstNumber, secondNumber } = req.body;
    
    let result;   

    if (firstNumber&&typeof firstNumber !== "number") {
      res.status(422);
      throw new Error(`${firstNumber} must be a number`);
    }

    if (secondNumber&&typeof secondNumber !== "number") {
      res.status(400);
      throw new Error("This value is not a number");
    }    
    result = firstNumber + secondNumber;

    res.status(200).send(result);
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};
