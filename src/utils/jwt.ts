import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateToken = (user: any): string => {
  const secret = "JustInfo";
  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }

  const payload = {
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role || 'user' // optional
  };

  return jwt.sign(payload, secret, {
    expiresIn: '1h',
  });
};
