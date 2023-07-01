import dotenv from 'dotenv'

dotenv.config()

export const {
  NODE_ENV,
  PORT = 5000,
  MOVIE_API,
  MOVIE_API_TOKEN,
  CORS_LOCAL = '',
} = process.env
