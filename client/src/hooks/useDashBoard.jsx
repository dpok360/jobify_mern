import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import customFetch from '../utils/customFetch';

function useDashBoard() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async () => {
    await customFetch.get('/auth/logout');
    toast.success('Logout successfully');
    navigate('/');
  };

  return { logoutUser, showSidebar, toggleSidebar };
}

export default useDashBoard;
