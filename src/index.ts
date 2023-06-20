import express, {Request, Response} from 'express'
import cors from 'cors'
import { TDivision } from './types'
const PORT = 3003

const server =express()

server.use(express.json())
server.use(cors())

server.listen(3003,()=>console.log("server on in port ", PORT))

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

// vamos trabalhar as 4 operações básicas de matemática coisa simples
// endpoint tipo post o nome do endpoint é livre um para cada membro
// adição / subtração / divisão / multiplicação
// Bart   /   Bruno   / Flávia  / Julia 
// bora nessa ordem?  (ver no readme.)

server.get('/',(req:Request,res:Response)=>{
  try {
    res.send("Wellcome! four operations online.")
  } catch (error) {
    
  }
})


