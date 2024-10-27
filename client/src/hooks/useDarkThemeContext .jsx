import { useContext } from 'react';
import DarkThemeContext from '../context/DarkThemeContext';

const useDarkThemeContext = () => useContext(DarkThemeContext);

export default useDarkThemeContext;
