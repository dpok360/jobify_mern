import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/ThemeToggle';
import useDarkThemeContext from '../hooks/useDarkThemeContext ';

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useDarkThemeContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
}

export default ThemeToggle;
