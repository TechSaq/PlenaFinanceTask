import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigation } from './BottomTabNavigation'
import { createStackNavigator } from '@react-navigation/stack';
import { CombinedDarkTheme, CombinedLightTheme, ThemeType, useThemeStore } from '../theming';

export const Stack = createStackNavigator();

const AppNavigation = () => {

  const { isThemeDark } = useThemeStore();

  let theme = isThemeDark ? CombinedDarkTheme : CombinedLightTheme;

  return (
    <NavigationContainer theme={theme} >
      <BottomTabNavigation />
    </NavigationContainer>
  )
}

export default AppNavigation;