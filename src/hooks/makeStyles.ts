import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useCustomTheme } from './useTheme';
import { ThemeType } from '../theming';

type StylesFunc = (theme: ThemeType, props?: any) => any

// TODO: write more specific types for styles
export const makeStyles = (styles: StylesFunc) => (props?: any): StyleSheet.NamedStyles<any> => {

  const theme = useCustomTheme();

  return useMemo(() => {
    const css = typeof styles === 'function' ? styles(theme, props) : styles;
    return StyleSheet.create(css);
  }, [props, theme]);
};

