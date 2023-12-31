import { NextFunction, Request, Response } from 'express'
import { api } from '../../../utils/api.js'

// @desc Fetch all movie
// @route GET /api/v1/movie
// @access Public

export const getNowplayingMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = req.query.page || 1
    const timeout = req.query.timeout
    let response = await api.get(
      `/3/movie/now_playing?language=en-US&page=${page}`
    )
    if (timeout === 'none') {
      return res.status(200).json(response.data)
    }
    setTimeout(() => {
      return res.status(200).json(response.data)
    }, 5000)
  } catch (error) {
    return res.status(500).json(error)
  }
}

// @desc Fetch popular movie
// @route GET /api/v1/popular
// @access Public

export const getPopularMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = req.query.page || 1
    const timeout = req.query.timeout
    let response = await api.get(`/3/movie/popular?language=en-US&page=${page}`)

    if (timeout === 'none') {
      return res.status(200).json(response.data)
    }
    setTimeout(() => {
      return res.status(200).json(response.data)
    }, 5000)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}
