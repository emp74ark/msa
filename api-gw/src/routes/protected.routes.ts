import express from 'express';
import {
  proxyController
} from '../controllers/proxy.controller.js';

const router = express.Router();

router.get('*', proxyController);

router.post('*', proxyController);

router.put('*', proxyController);

router.patch('*', proxyController);

router.delete('*', proxyController);

export default router;
