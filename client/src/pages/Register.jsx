import { Form, useNavigation, Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../components/Logo';
import { FormRow } from '../components';

function Register() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          labelText="first name"
          defaultValue="john"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="smilga"
        />
        <FormRow
          type="text"
          name="location"
          labelText="location"
          defaultValue="usa"
        />
        <FormRow
          type="email"
          name="email"
          labelText="email"
          defaultValue="john@example.com"
        />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button
          type="submit"
          className="btn btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <p>
          Already a member
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Register;
