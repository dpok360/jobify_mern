import { useLoaderData } from 'react-router-dom';
import { createContext, useContext } from 'react';
import JobsContainer from '../components/JobsContainer';
import SearchContainer from '../components/SearchContainer';

const AllJobsContext = createContext();

function AllJob() {
  const { data, searchValues } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
}

export default AllJob;
export const useAllJobContext = () => useContext(AllJobsContext);
