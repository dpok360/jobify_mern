import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const getAllJobsLoader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get('/jobs', {
      params,
    });

    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

export default getAllJobsLoader;
