import {PORT} from './constants.js';
import express, {json} from 'express';
import cors from 'cors';
import {default as authRoutes} from './routes/auth.routes.js';
import {default as protectedRoutes} from './routes/protected.routes.js';
import {default as msRoutes} from './routes/ms.routes.js';

const server = express();

server.listen(PORT, () => {
  console.log('API Gateway starts');
}).on('error', (err) => {
  console.error('API Gateway error', err.message);
});

server.use(cors());
server.use(json());

server.use(authRoutes);
server.use(protectedRoutes);
server.use(msRoutes);
