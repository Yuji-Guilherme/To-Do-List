import { useState } from 'react';
import { Light, Dark } from '@styles/Themes';
// import { setLocalStorage, getLocalStorage } from '@functions/';

const useChangeTheme = () => {
  const [theme, setTheme] = useState(Light);
  const handleTheme = () => {
    setTheme(theme === Light ? Dark : Light);
  };
  return {
    theme,
    handleTheme
  };
};

export { useChangeTheme };
