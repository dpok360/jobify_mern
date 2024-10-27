import bcrypt from 'bcryptjs';
import { hasUncaughtExceptionCaptureCallback } from 'process';

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

export const comparePassword = async (password, hasedPassword) => {
  const isMatch = await bcrypt.compare(password, hasedPassword);
  return isMatch;
};
