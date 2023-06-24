import { Request, Response } from 'express'
import { handlerError } from './handlerError';
import z from 'zod'

export function exampleOperations(req: Request, res: Response) {
  try {
    // ========  UTILIZANDO O ZOD ================    
    const schema = z.object({
      valueA: z.number({
        required_error: "'valueA' is required.",
        invalid_type_error: "'valueA' need to be the numeric type;"
      }).min(1, "must be greater then 0."),
      valueB: z.number({
        required_error: "'valueB' is required.",
        invalid_type_error: "'valueB' need to be the numeric type;"
      }).min(1),
      operator: z.string({
        required_error: "'operator' is required.",
        invalid_type_error: "'operator' invalid;"
      }).regex(/^[\+\-\*\/\(\)]+$/)
    });
    // executando o teste 
    schema.parse(req.body)
    // ===================
    // passando dos testes de validação segue a vida
    const { valueA, valueB, operator } = req.body
    res.status(200).json(eval(valueA + operator + valueB))
  } catch (error) {
    handlerError(res, error)
  }
}