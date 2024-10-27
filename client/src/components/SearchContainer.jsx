import { Form, useSubmit, Link } from 'react-router-dom';
import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useAllJobContext } from '../pages/AllJob';
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../utils/constants';

function SearchContainer() {
  const { searchValues } = useAllJobContext();
  const { search, jobStatus, jobType, sort } = searchValues;
  const submit = useSubmit();
  const debounce = (onChange) => {
    let timeout;

    return (e) => {
      const { form } = e.currentTarget;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2200);
    };
  };

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          {/* search position */}

          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
}

export default SearchContainer;
