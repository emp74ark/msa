import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

export const PORT = Number(env.PORT) || 4100;
export const JWT_SECRET = env.JWT_SECRET ?? '';
export const AUTH_MS = env.AUTH_MS ?? 'http://auth-ms:4200';
export const MS_1 = env.MS_1 ?? 'http://localhost:4300';
export const MS_2 = env.MS_2 ?? 'http://localhost:4400';
