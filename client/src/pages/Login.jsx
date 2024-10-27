import { Link, Form, useActionData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';

function Login() {
  const errors = useActionData();
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>log in</h4>
        {errors?.msg && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <FormRow type="email" name="email" defaultValue="john@example.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          Not a member yet
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Login;
