import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

const addJobAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/jobs', data);
    toast.success('JOb added successfully');
    return redirect('all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

export default addJobAction;
