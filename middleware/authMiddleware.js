import { threadId } from 'worker_threads';
import {
  BadRequestError,
  UnauthenticatedError,
} from '../errors/customError.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');
  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === '66cc4c661e7b477168403d8c';
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError('Demo user.Read only');
  }
  next();
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthenticatedError('Unauthorized to access this route');
    }
    next();
  };
};
