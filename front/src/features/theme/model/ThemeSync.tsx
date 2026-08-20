import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from './themeSlice';

export const ThemeSync = () => {
  const theme = useSelector(themeSelector);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    console.log(theme);
    
  }, [theme]);

  return null;
};