import React from 'react';
import { ProductNavigationStack } from '../../products';
import { Stack } from '../../../navigation';
import { SCREEN_CONSTANTS } from '../../../navigation/utils/constants';
import { Text } from 'react-native';

const HomeScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_CONSTANTS.ProductNavigationStack}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREEN_CONSTANTS.ProductNavigationStack}
        component={ProductNavigationStack}
      />
    </Stack.Navigator>
  )
}

export default HomeScreen