import customFetch from '../utils/customFetch';

const statsLoader = async () => {
  try {
    const response = await customFetch.get('/jobs/stats');

    return response.data;
  } catch (error) {
    return error;
  }
};

export default statsLoader;
