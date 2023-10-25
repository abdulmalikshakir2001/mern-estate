import express from 'express'
import {test} from '../controllers/userController.js';
const router = express.Router()


// define the home page route
router.get('/test',test);
// define the about route


export default router