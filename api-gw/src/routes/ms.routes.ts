import express from 'express';
import { MS_1, MS_2 } from '../constants.js';

const router = express.Router();

router.get('/resource_a', (req, res) => {
  res.redirect(MS_1);
});

router.get('/resource_b', (req, res) => {
  res.redirect(MS_2);
});

export default router;
