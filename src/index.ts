//criei-adicao-BrunoMoura
// import express, { Request, Response } from "express";
// import cors from "cors";
// const PORT = 3003;

import express, {Request, Response} from 'express'
import cors from 'cors'
import { TDivision } from './types'
import { creatAddition } from "./endpoints/createAddition";
import { postSubtraction } from './endpoints/postSubtraction';
const PORT = 3003
//main

const server = express();

server.use(express.json());
server.use(cors());

server.listen(3003, () => console.log("server on in port ", PORT));

server.post('/division', (req: Request, res: Response)=>{
        try {
        const {dividend, divider} = req.body

        const newDivision: TDivision={
            dividend,
            divider
        }

        if(dividend===undefined){
            res.status(400);
            throw new Error('The operation must have one dividend and one divider. Try again.')
        }

        if(divider===undefined || divider===0){
            res.status(400);
            throw new Error('The divider cannot be zero. Try again.')
        }

        if(typeof(dividend)==="number" && typeof(divider)==='number'){
            if(divider!==0){
                const result = dividend/divider
                res.status(200).send(`${dividend}/${divider} = ${result}`)
            }
            res.status(400);
            throw new Error('The divider must be different from zero.')

        }else{
            res.status(400);
            throw new Error('The divider and the dividend must be numbers.')
        }
        
    } catch (error) {
        if(error instanceof Error){
            res.send(error.message)
        }else{
            res.send('Known error.')
        }
    }
    
})

server.get('/',(req:Request,res:Response)=>{
  try {
    res.send("Wellcome! four operations online.")
  } catch (error) {
    if(error instanceof Error){
      res.send(error.message)
    }else{
     res.send('Known error.')
   }
 }
})

server.post("/addition", creatAddition);
server.post("/subtraction", postSubtraction);