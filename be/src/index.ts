import express, { Express, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
// import {
//   NODE_ENV,
//   PORT,
// } from './u'
import { NODE_ENV } from '../utils/index.js'

dotenv.config()

const app: Express = express()
const port: number = PORT ? Number(process.env.PORT) : 3000

/* Routes */
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Express + TypeScript Server is running',
  })
})

app.listen(port, '0.0.0.0', () => {
  let log = `⚡️[server]: Server is running  ${process.env.NODE_ENV} mode on `
  if (NODE_ENV?.trim() === 'development') {
    log += `http://localhost:${port}`
  } else {
    log = `${port}`
  }
  console.log(log)
})
