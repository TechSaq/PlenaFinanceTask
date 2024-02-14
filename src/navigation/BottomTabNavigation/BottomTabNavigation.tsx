import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../features/home';
import { CategoryListScreen } from '../../features/category';
import { IconSvg } from '../../library';
import { HomeIcon } from '../../assets/icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../../utils/fonts';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: RFValue(60),
      },
      tabBarLabelStyle: {
        fontFamily: FONTS.Manrope?.ManropeMedium,
        color: '#1A1D1F',
        marginBottom: RFValue(12)
      },
    }} >
      <Tab.Screen
        name="HomeScreenStack"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <IconSvg icon={HomeIcon} active={focused} containerStyle={{ marginBottom: RFValue(focused ? 20 : 0) }} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoriesScreenStack"
        component={CategoryListScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ focused }) => (
            <IconSvg icon={HomeIcon} active={focused} containerStyle={{ marginBottom: RFValue(focused ? 20 : 0) }} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreenStack"
        component={CategoryListScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ focused }) => (
            <IconSvg icon={HomeIcon} active={focused} containerStyle={{ marginBottom: RFValue(focused ? 20 : 0) }} />
          ),
        }}
      />
      <Tab.Screen
        name="MoreScreenStack"
        component={CategoryListScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ focused }) => (
            <IconSvg icon={HomeIcon} active={focused} containerStyle={{ marginBottom: RFValue(focused ? 20 : 0) }} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation