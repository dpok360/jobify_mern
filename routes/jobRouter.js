import { Router } from 'express';
const jobRouter = Router();
import {
  createJob,
  deleteJob,
  getAllJob,
  getJob,
  updateJob,
  showStats,
} from '../controllers/jobController.js';
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

jobRouter
  .route('/')
  .get(getAllJob)
  .post(checkForTestUser, validateJobInput, createJob);

jobRouter.route('/stats').get(showStats);

jobRouter
  .route('/:id')
  .get(checkForTestUser, validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default jobRouter;
