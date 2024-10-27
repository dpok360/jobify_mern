import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import Wrapper from '../assets/wrappers/LogoutContainer';
import useDashboardContext from '../hooks/useDashboardContext';

function LogoutContainer() {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        aria-label="logout button"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} className="img" alt="avatar" />
        ) : (
          <FaUserCircle />
        )}

        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
}

export default LogoutContainer;
