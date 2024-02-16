import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../features/home';
import { CategoryListScreen } from '../../features/category';
import { IconSvg } from '../../library';
import { BackIcon, CategoryIcon, FavouriteIcon, HomeIcon, MoreVerticalIcon } from '../../assets/icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../../utils/fonts';
import { SCREEN_CONSTANTS } from '../utils/constants';
import { useCustomTheme } from '../../hooks';
import { FavouriteListScreen } from '../../features/favourite';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {

  const theme = useCustomTheme();

  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName={SCREEN_CONSTANTS.HomeStack}
      screenOptions={{
        tabBarStyle: {
          height: RFValue(60),
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.Manrope?.ManropeMedium,
          color: theme.colors.TAB_BAR_TEXT,
          marginBottom: RFValue(12)
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name={SCREEN_CONSTANTS.HomeStack}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <IconSvg icon={HomeIcon} active={focused} containerStyle={{ marginBottom: RFValue(focused ? 20 : 0) }} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_CONSTANTS.Category}
        component={CategoryListScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ focused }) => (
            <IconSvg icon={CategoryIcon} active={focused} containerStyle={{ marginBottom: RFValue(focused ? 20 : 0) }} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_CONSTANTS.Favourite}
        component={FavouriteListScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ focused }) => (
            <IconSvg icon={FavouriteIcon} active={focused} containerStyle={{ marginBottom: RFValue(focused ? 20 : 0) }} />
          ),

          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Shopping Cart',
          headerLeft: (props) => {
            return (
              <Pressable onPress={navigation.goBack} >
                <IconSvg
                  icon={BackIcon}
                  size={40}
                />
              </Pressable>
            )
          },
          headerStyle: {
            height: RFValue(64),
          },
          headerLeftContainerStyle: {
            paddingTop: RFValue(20)
          },
          headerTitleContainerStyle: {
            paddingTop: RFValue(20),
          }
        }}
      />
      <Tab.Screen
        name={SCREEN_CONSTANTS.More}
        component={CategoryListScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ focused }) => (
            <IconSvg icon={MoreVerticalIcon} active={focused} containerStyle={{ marginBottom: RFValue(focused ? 20 : 0) }} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation