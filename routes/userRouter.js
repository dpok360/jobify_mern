import { Router } from 'express';
import {
  getApplicationStatus,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authorizePermissions,
  checkForTestUser,
} from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

const userRouter = Router();

userRouter.get('/current-user', getCurrentUser);
userRouter.get('/admin/app-stats', [
  authorizePermissions('admin'),
  getApplicationStatus,
]);
userRouter.patch(
  '/update-user',
  checkForTestUser,
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
);

export default userRouter;
