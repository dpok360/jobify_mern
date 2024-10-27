import { createContext } from 'react';
import PropTypes from 'prop-types';
import useDarkTheme from '../hooks/useDarkTheme';

const DarkThemeContext = createContext();

export function DarkThemeProvider({ children }) {
  const { isDarkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <DarkThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
}
DarkThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DarkThemeContext;
