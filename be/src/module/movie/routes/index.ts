import express from 'express'
import { getPopularMovie } from '../controller/index.js'
const router = express.Router()

// Get Router
router.route('/popular').get(getPopularMovie)

export default router
