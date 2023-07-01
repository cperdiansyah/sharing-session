import axios from 'axios'
import { VITE_BASE_URL } from '.'

export const BASE_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  // accept: 'application/json',
}

export const api = axios.create({
  baseURL: VITE_BASE_URL,
  headers: BASE_HEADERS,
  withCredentials: true,
})

export const SERVICE = {
  movie: '/api/v1/movie',
}
