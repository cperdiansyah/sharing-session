import express, { Express, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import { NODE_ENV, PORT } from './utils/index.js'

dotenv.config()

/* Routes */
import movieRoutes from './module/movie/routes/index.js'

const app: Express = express()
const port: number = PORT ? Number(process.env.PORT) : 3000
app.use(express.json())

/* Routes */
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Express + TypeScript Server is running',
  })
})

// movie routes
app.use('/api/v1/movie', movieRoutes)

app.listen(port, '0.0.0.0', () => {
  let log = `⚡️[server]: Server is running  ${process.env.NODE_ENV} mode on `
  if (NODE_ENV?.trim() === 'development') {
    log += `http://localhost:${port}`
  } else {
    log = `${port}`
  }
  console.log(log)
})
