import React, { useState, useCallback, useMemo, useEffect, useContext } from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  Theme
} from '@react-navigation/native';
import { LocalStorage, LocalStorageConstants } from '../utils/LocalStorageHelpers';
import { LightColorTheme } from './LightThemeColors';
import { DarkColorTheme } from './DarkThemeColors';

export type ThemeType = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;

    PRIMARY: string,
    PRIMARY_1: string,
    SECONDARY: string,
    SECONDARY_1: string,

    BLACK_100: string,
    BLACK_90: string,
    BLACK_60: string,
    BLACK_45: string,
    BLACK_20: string,
    BLACK_10: string,
    BLACK_1: string,

    TAB_BAR_TEXT: string,
  };
}

export const CombinedLightTheme = {
  ...NavigationLightTheme,
  colors: {
    ...NavigationLightTheme.colors,
    ...LightColorTheme.colors,
  },
};

export const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...DarkColorTheme.colors,
  },
};

export const ThemeContext = React.createContext({
  toggleTheme: () => { },
  isThemeDark: false,
});

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  useEffect(() => {
    (
      async function ThemeIIFE() {
        const isThemeDarkLS = await LocalStorage.getItem(LocalStorageConstants.APP_THEME_MODE, false);
        setIsThemeDark(Boolean(isThemeDarkLS));
      }
    )();
  }, [])

  const toggleTheme = useCallback(() => {
    LocalStorage.setItem(LocalStorageConstants.APP_THEME_MODE, !isThemeDark);
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const values = useMemo(
    () => ({ toggleTheme, isThemeDark }),
    [toggleTheme, isThemeDark],
  );

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeStore = () => useContext(ThemeContext);
