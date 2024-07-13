import { NextFunction, Request, Response } from 'express';
import { AUTH_MS } from '../constants.js';

export const authController = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const response = await fetch(`${AUTH_MS}/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const authData = await response.json();

  if ('token' in authData) {
    return res.status(200).json({ token: authData.token });
  }

  return res.status(401).json({ message: 'Unauthorized' });
};
