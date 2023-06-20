import express, {Request, Response} from 'express'
import cors from 'cors'

import { exampleOperations } from './exampleOperation'

const PORT = 3003

const server =express()

server.use(express.json())
server.use(cors())

server.listen(3003,()=>console.log("server on in port ", PORT))

// vamos trabalhar as 4 operações básicas de matemática coisa simples
// endpoint tipo post o nome do endpoint é livre um para cada membro
// adição / subtração / divisão / multiplicação
// Bart   /   Bruno   / Flávia  / Julia 
// bora nessa ordem?  

server.post('/exampleone',exampleOperations)


