import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

interface JwtPayload {
  _id: unknown;
  username: string;
  email: string;
}

export const signToken = (user: { username: string; email: string; _id: unknown }) => {
  const { username, email, _id } = user;
  const payload = { username, email, _id };
  const secretKey = process.env.JWT_SECRET || '';

  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const authMiddleware = ({ req }: { req: any }) => {
  let token = req.headers?.authorization || '';

  if (token.startsWith('Bearer ')) {
    token = token.split(' ').pop()?.trim();
  }

  if (!token) {
    return { user: null };
  }

  try {
    const secretKey = process.env.JWT_SECRET || '';
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    return { user: decoded };
  } catch {
    console.log('Invalid token');
    return { user: null };
  }
};
