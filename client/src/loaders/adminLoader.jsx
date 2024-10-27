import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

const adminLoader = async () => {
  try {
    const response = await customFetch.get('/user/admin/app-stats');
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};

export default adminLoader;
