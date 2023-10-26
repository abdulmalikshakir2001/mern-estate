import express from 'express'
import {signup,signin} from '../controllers/authController.js';
const router = express.Router()
// define the home page route
router.post('/signup',signup);
router.post('/signin',signin);
// define the about route


export default router