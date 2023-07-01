import express from 'express'
import { getNowplayingMovie, getPopularMovie } from '../controller/index.js'
const router = express.Router()

// Get Router
router.route('/popular').get(getPopularMovie)
router.route('/now-playing').get(getNowplayingMovie)

export default router
