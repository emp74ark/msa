import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants.js';

const proxyRoutes: { path: string; accessTag: string }[] = [
  { path: '/resource_a', accessTag: 'ms1' },
  { path: '/resource_b', accessTag: 'ms2' },
];

type JsonPayloadType = {
  username: string;
  access: string[];
  iat: number;
  exp: number;
};

export const proxyController = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const path = req.path;
  const defaultBody = { path, method: req.method };
  const defaultResponse = () => res.status(401).json({ ...defaultBody, message: 'Unauthorized' });

  if (!authHeader) return defaultResponse();

  jwt.verify(authHeader, JWT_SECRET, (err, payload) => {
    if (err) return defaultResponse();

    const matchedRoute = proxyRoutes.find((route) => {
      return route.path === path;
    });

    const { access } = payload as JsonPayloadType;

    if (matchedRoute?.accessTag && access.includes(matchedRoute?.accessTag)) {
      next();
    } else {
      return defaultResponse();
    }
  });
};
