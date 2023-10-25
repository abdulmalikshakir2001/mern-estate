import express from 'express'
import {signup} from '../controllers/authController.js';
const router = express.Router()
// define the home page route
router.post('/signup',signup);
// define the about route


export default router