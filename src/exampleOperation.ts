import { Request, Response } from 'express'

export function exampleOperations(req: Request, res: Response) {
  
  try {

    const { valueA, valueB } = req.body

    // submission validation
    if (valueA === undefined) {
      res.status(400)
      throw new Error('valueA is required.')
    }
    if (valueB === undefined) {
      res.status(400)
      throw new Error('valueB is required.')
    }

    // TYPE validation
    if (typeof valueA !== 'number') {
      res.status(400)
      throw new Error('valueA must be of numeric type.')
    }
    if (typeof valueB !== 'number') {
      res.status(400)
      throw new Error('valueB must be of numeric type.')
    }

    // returns the result
    res.status(200).json(valueA * valueB)

  } catch (error) {
    
    if(res.statusCode===200){
      res.status(500)
    }
    if ( error instanceof Error){
      res.send(error.message)
    } else {
      res.send('unknown error, report to administrator.')
    }
  }
}