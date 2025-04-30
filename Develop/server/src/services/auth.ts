import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

interface JwtPayload {
  _id: unknown;
  username: string;
  email: string;
}

// create token
export const signToken = (user: { username: string; email: string; _id: unknown }) => {
  const { username, email, _id } = user;
  const payload = { username, email, _id };
  const secretKey = process.env.JWT_SECRET || '';

  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

// authenticate token for GraphQL
export const authMiddleware = (req: any) => {
  let token = req.body?.token || req.query?.token || req.headers?.authorization;

  if (req.headers?.authorization) {
    token = token.split(' ').pop()?.trim();
  }

  if (!token) {
    return req;
  }

  try {
    const secretKey = process.env.JWT_SECRET || '';
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    req.user = decoded;
  } catch {
    console.log('Invalid token');
  }

  return req;
};
