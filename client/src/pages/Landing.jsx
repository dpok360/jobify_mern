import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from '../components';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            I'm baby post-ironic iceland kale chips ethical woke, street art
            ennui pabst cornhole tattooed direct trade XOXO chillwave fanny
            pack. Small batch fanny pack mustache cornhole, iceland woke
            bushwick. Air plant PBR&B solarpunk banjo raw denim ugh. Four dollar
            toast wayfarers raclette VHS.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
