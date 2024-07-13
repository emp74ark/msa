import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_TTL } from './constants.js';

const mockedUsers: {
  username: string;
  password: string;
  access: string[];
}[] = [
  {
    username: 'neena_quinonezaqg@quotations.vm',
    password: 'LpeJnOXBjPU7itTDDb9',
    access: ['ms1'],
  },
  {
    username: 'ruthanna_tollefsonmst@instruction.fhk',
    password: 'LpeJnOXBjPU7itTDDb9',
    access: ['ms2'],
  },
  {
    username: 'lolita_kingsbury2gsk@macedonia.cr',
    password: 'LpeJnOXBjPU7itTDDb9',
    access: ['ms1', 'ms2'],
  },
];

export const authController = async (
  req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const matchedUser = mockedUsers.find((el) => {
    return el.username === username && el.password === password;
  });

  if (matchedUser) {
    const token = jwt.sign({ username, access: matchedUser.access }, JWT_SECRET,
      { expiresIn: JWT_TTL });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Unauthorized' });
};
