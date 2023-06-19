import express, {Request, Response} from 'express'
import cors from 'cors'
import { TSubtraction } from './types'
const PORT = 3003

const server =express()

server.use(express.json())
server.use(cors())

server.listen(3003, () => console.log("server on in port ", PORT))

//criando endpoint de subtração
server.post("/subtraction", (req: Request, res: Response) => {
    try {
        
        const { minuendo, subtraendo } = req.body
    
        if (minuendo === undefined || subtraendo === undefined) {
            res.status(400)
            throw new Error("enter all the necessary data, try again!");

        } else if (typeof minuendo !== "number" || typeof subtraendo !== "number") {
            res.status(400)
            throw new Error("value must be a number, try again!");
        }

        const newSubtraction: TSubtraction = {
            minuendo,
            subtraendo,
            result: minuendo - subtraendo
        }
        res.status(200).send(newSubtraction)

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
})

// vamos trabalhar as 4 operações básicas de matemática coisa simples
// endpoint tipo post o nome do endpoint é livre um para cada membro
// adição / subtração / divisão / multiplicação
// Bart   /   Bruno   / Flávia  / Julia 
// bora nessa ordem?  



