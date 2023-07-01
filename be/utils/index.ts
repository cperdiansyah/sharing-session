import dotenv from 'dotenv'

dotenv.config()

export const { NODE_ENV, PORT = 5000 } = process.env
