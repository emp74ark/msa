import express from 'express';
import { authController } from './controller.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({message: 'Authentication server works'});
})
router.post('/login', authController);

export default router;
