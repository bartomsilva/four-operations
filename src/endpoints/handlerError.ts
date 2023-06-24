import {Response } from 'express'
import { ZodError } from 'zod'

// mensagens de erro
export const handlerError =(res:Response, error:unknown)=>{
  if (error instanceof ZodError) {
    res.status(422).send(error.issues[0].message)

 } else if (error instanceof Error) {
    res.send(error.message)

 } else {
    res.status(500).send('unknown error, report to administrator.')
 }
}

