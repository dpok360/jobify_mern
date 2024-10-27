import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

const currentUserLoader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};
export default currentUserLoader;
