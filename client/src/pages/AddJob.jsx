import { Form } from 'react-router-dom';
import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import useDashboardContext from '../hooks/useDashboardContext';
import FormRowSelect from '../components/FormRowSelect';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants';

function AddJob() {
  const { user } = useDashboardContext();
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={user?.location}
          />

          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn />
        </div>
      </Form>
    </Wrapper>
  );
}

export default AddJob;
