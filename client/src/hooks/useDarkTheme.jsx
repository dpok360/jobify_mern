import { useEffect, useState } from 'react';

function useDarkTheme() {
  const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
  };
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  useEffect(
    function () {
      document.body.classList.toggle('dark-theme', isDarkTheme);
    },
    [isDarkTheme]
  );

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  return { isDarkTheme, toggleDarkTheme };
}

export default useDarkTheme;
