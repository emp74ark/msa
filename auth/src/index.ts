import express, {json} from 'express';
import cors from 'cors';
import {default as routes} from './routes.js';
import {PORT} from './constants.js';

const server = express();

server.listen(PORT, () => {
  console.log('Authentication server starts');
}).on('error', (error) => {
  console.error('Authentication server error', error.message);
});

server.use(cors());

server.use(json());

server.use(routes);
