import express, { Express, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { CORS_LOCAL, NODE_ENV, PORT } from './utils/index.js'

dotenv.config()

/* Routes */
import movieRoutes from './module/movie/routes/index.js'

const app: Express = express()
const port: number = PORT ? Number(process.env.PORT) : 3000
app.use(express.json())

/* Cors Setting */
const whitelist: string[] = [CORS_LOCAL]

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})
app.use(
  cors({
    origin: function (origin: any, callback: CallableFunction) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
  })
)
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
