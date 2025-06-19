import express from 'express';
import { aboutController, contactController, homeController } from '../controllers/index.js';

const router = express.Router();

router.get('/about', aboutController);
router.get('/contact', contactController);
router.get('/home', homeController);

export default router;