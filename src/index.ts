import express, { Request, Response } from "express";
import cors from "cors";
import { exampleOperations } from "./endpoints/example";
import { addition } from "./endpoints/addition";
import { subtraction } from "./endpoints/subtraction";
import { circleArea } from "./endpoints/circleArea";
import { squareArea } from "./endpoints/squareArea";
import { welcome } from "./endpoints/welcome";
import { multiplication } from "./endpoints/multiplication";
import { division } from "./endpoints/divison";

const PORT = 3003;
const server = express();

server.use(express.json());
server.use(cors());

server.listen(3003, () => console.log("server on in port ", PORT));

server.get("/", welcome);

server.post("/addition", addition);

server.post("/subtraction", subtraction);

server.post("/multiplication", multiplication);

server.post("/division", division);

server.post("/example", exampleOperations);

server.post("/circleArea" , circleArea);

server.post("/squareArea" , squareArea);