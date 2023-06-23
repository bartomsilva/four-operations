import express, { Request, Response } from "express";
import cors from "cors";

import { exampleOperations } from "./endpoints/example";
import { TMultiplication } from "./types";
import { TDivision } from "./types";
import { creatAddition } from "./endpoints/createAddition";
import { postSubtraction } from "./endpoints/postSubtraction";
import { circleArea } from "./endpoints/circleArea";
import { squareArea } from "./endpoints/squareArea";
import { handlerError } from "./endpoints/catch";

const PORT = 3003;
const server = express();

server.use(express.json());
server.use(cors());

server.listen(3003, () => console.log("server on in port ", PORT));

server.get("/", (req: Request, res: Response) => {
  try {
    res.send("Wellcome! four operations online.");
  } catch (error) {
    handlerError(res, error);
  }
});

server.post("/addition", creatAddition);
server.post("/subtraction", postSubtraction);

server.post("/multiplication", (req: Request, res: Response) => {
  try {
    const { multiplying, multiplier } = req.body;

    if (multiplying === undefined || multiplier === undefined) {
      res.statusCode = 400;
      throw new Error(`Invalid data, please check.`);
    }
    if (typeof multiplying !== "number" || typeof multiplier !== "number") {
      res.statusCode = 400;
      throw new Error(`Invalid values, please enter numbers!`);
    }

    const resultMultiplication: TMultiplication = {
      multiplying,
      multiplier,
      result: multiplying * multiplier,
    };

    res
      .status(200)
      .send(
        `The multiplication of numbers ${multiplying} and ${multiplier} is ${resultMultiplication.result}.`
      );
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send(`Internal server error.`);
    }
  }
});

server.post("/division", (req: Request, res: Response) => {
  try {
    const { dividend, divider } = req.body;

    const newDivision: TDivision = {
      dividend,
      divider,
    };

    if (dividend === undefined) {
      res.status(400);
      throw new Error(
        "The operation must have one dividend and one divider. Try again."
      );
    }

    if (divider === undefined || divider === 0) {
      res.status(400);
      throw new Error("The divider cannot be zero. Try again.");
    }

    if (typeof dividend === "number" && typeof divider === "number") {
      if (divider !== 0) {
        const result = dividend / divider;
        res.status(200).send(`${dividend}/${divider} = ${result}`);
      }
      res.status(400);
      throw new Error("The divider must be different from zero.");
    } else {
      res.status(400);
      throw new Error("The divider and the dividend must be numbers.");
    }
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Known error.");
    }
  }  
});
server.post("/example", exampleOperations);

server.post("/circleArea" , circleArea)

server.post("/squareArea" , squareArea)