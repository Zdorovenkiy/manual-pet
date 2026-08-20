import { useDispatch, useSelector } from 'react-redux';
import { themeSelector, toggleTheme } from '../model/themeSlice';
import { Button } from '@/shared/ui';
import type { ComponentProps } from 'react';
import Sun from "@shared/assets/icons/sun.svg?react";
import Moon from "@shared/assets/icons/moon.svg?react";

interface Props extends ComponentProps<typeof Button> {}

function ThemeSwitcher({background, color}: Props) {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  return (
    <Button 
      background={background} 
      color={color} 
      width={"fit-content"} 
      onClick={() => dispatch(toggleTheme())}
      style={{padding: 10}}
      >
      {theme === 'dark' ? (
        <Sun
          color={color}
          width={25}
          height={25}
        />
      ) : (
        <Moon
          color={color}
          width={25}
          height={25}
        />
      )}
    </Button>
  );
};

export default ThemeSwitcher;