import express, { Request, Response } from "express";
import cors from "cors";
import { TMultiplication } from "./types";
const PORT = 3003;

const server = express();

server.use(express.json());
server.use(cors());

server.listen(3003, () => console.log("server on in port ", PORT));

// vamos trabalhar as 4 operações básicas de matemática coisa simples
// endpoint tipo post o nome do endpoint é livre um para cada membro
// adição / subtração / divisão / multiplicação
// Bart   /   Bruno   / Flávia  / Julia
// bora nessa ordem?

// Endpoint de multiplicação

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
