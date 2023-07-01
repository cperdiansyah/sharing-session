import axios from 'axios'
import dotenv from 'dotenv'
import { MOVIE_API_TOKEN } from './index.js'

dotenv.config()

export const BASE_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  Authorization: `Bearer ${MOVIE_API_TOKEN}`,
  // accept: 'application/json',
}

export const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: BASE_HEADERS,
  withCredentials: true,
})
