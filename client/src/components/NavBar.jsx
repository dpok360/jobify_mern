import { FaAlignLeft } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';

import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';
import useDashboardContext from '../hooks/useDashboardContext';

function NavBar() {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          aria-label="Toggle sidebar"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
}

export default NavBar;
