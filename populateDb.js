import dotenv from 'dotenv';
dotenv.config();
import DBconnect from './config/database.js';
import User from './model/userModel.js';
import Job from './model/jobModel.js';
import { readFile } from 'fs/promises';

try {
  await DBconnect();
  const user = await User.findOne({ email: 'john@example.com' });
  const jsonJobs = JSON.parse(
    await readFile(new URL('./utils/MOCK_DATA.json', import.meta.url))
  );
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });
  await Job.deleteMany({ createdBy: user._id });
  await Job.create(jobs);
  console.log('Success...');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
