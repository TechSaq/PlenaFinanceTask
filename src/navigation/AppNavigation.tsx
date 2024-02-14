import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigation } from './BottomTabNavigation'

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  )
}

export default AppNavigation;