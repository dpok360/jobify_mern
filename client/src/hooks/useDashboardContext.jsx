import { useContext } from 'react';
import DashboardContext from '../context/DashboardContext';

const useDashboardContext = () => useContext(DashboardContext);
export default useDashboardContext;
