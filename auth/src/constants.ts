import dotenv from 'dotenv';

dotenv.config();
export const env = process.env;
export const PORT = Number(env.PORT) || 4200;
export const JWT_SECRET = env.JWT_SECRET ?? '';
export const JWT_TTL = env.JWT_TTL ?? '180s';
