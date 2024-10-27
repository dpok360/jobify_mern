import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import useDashBoard from '../hooks/useDashBoard';

// const user = currentUserLoader();
const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const dashboard = useDashBoard();
  const { user } = useLoaderData();
  return (
    <DashboardContext.Provider value={{ ...dashboard, user }}>
      {children}
    </DashboardContext.Provider>
  );
}

DashboardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardContext;
