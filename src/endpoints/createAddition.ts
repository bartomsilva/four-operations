import { Request, Response } from "express";
import { ACCOUNT_TYPE, TAccount } from "../types";

export const creatAddition = (req: Request, res: Response) => {
  try {
    const { firstNumber, secondNumber, type } = req.body;
    const newAccount: TAccount = {
      firstNumber,
      secondNumber,
      type,
    };

    for (const key in newAccount) {
      if (newAccount[key as keyof TAccount] === undefined) {
        res.status(400);
        throw new Error("All fields must be informed");
      }
    }

    if (typeof firstNumber !== "number") {
      res.status(422);
      throw new Error(`${firstNumber} must be a number`);
    }

    if (typeof secondNumber !== "number") {
      res.status(400);
      throw new Error("This value is not a number");
    }

    if (type !== ACCOUNT_TYPE.ADDITION) {
      res.status(400);
      throw new Error("Invalid value of type");
    }

    // accounts.push(newAccount);

    res.status(200).send({ message: "Account is finished", newAccount });
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};
