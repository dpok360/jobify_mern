import Wrapper from '../assets/wrappers/JobsContainer';
import { useAllJobContext } from '../pages/AllJob';
import Job from './Job';
import PageBtnContainer from './PageBtnContainer';

function JobsContainer() {
  const { data } = useAllJobContext();
  const { jobs = [] } = data || {};
  const { totalJobs, numOfPages } = data;
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>no jobs to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
}

export default JobsContainer;
