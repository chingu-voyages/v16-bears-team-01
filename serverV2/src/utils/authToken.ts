import * as jwt from 'jsonwebtoken';
import { isPlainObject } from 'lodash';

// import * as dotenv from 'dotenv';
// dotenv.config();

export const signToken = (
  payload: object,
  options?: jwt.SignOptions
): string => {
  if (typeof process.env.JWT_SECRET !== 'string') {
    throw new Error('issue with jwt secret from .env');
  }
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '180 days',
      ...options
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const verifyToken = (token: string): any => {
  if (typeof process.env.JWT_SECRET === 'string') {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      if (isPlainObject(payload)) {
        return payload as { [key: string]: any };
      }
    } catch (error) {
      console.error(error);
    }
  }
};
