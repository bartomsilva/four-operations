import { Request, Response } from 'express'

export function exampleOperations(req: Request, res: Response) {

  try {

    const { valueA, valueB, operator } = req.body

    // submission validation
    if (valueA === undefined || valueA < 1) {
      res.status(400)
      throw new Error('valueA is required.')
    }
    if (valueB === undefined || valueB < 1) {
      res.status(400)
      throw new Error('valueB is required.')
    }

    // TYPE validation
    if (typeof valueA !== 'number') {
      res.status(422)
      throw new Error('valueA must be of numeric type.')
    }
    if (typeof valueB !== 'number') {
      res.status(422)
      throw new Error('valueB must be of numeric type.')
    }

    if (operator === undefined) {
      res.status(400)
      res.send('operator is requerid.')
    }

    if (typeof operator != 'string') {
      res.status(422)
      res.send('operator must be of string type.')
    }

    if (operator.length > 1) {
      res.status(422)
      res.send('enter only one operator.')
    }
    if (!operator.match(/[+\-/*]/g)){
      res.send(422)
      res.send('invalid operation, check operator.')
    }

    // returns the result
    res.status(200).json(eval(valueA + operator + valueB))

} catch (error) {

  if (res.statusCode === 200) {
    res.status(500)
  }
  if (error instanceof Error) {
    res.send(error.message)
  } else {
    res.send('unknown error, report to administrator.')
  }
}
}