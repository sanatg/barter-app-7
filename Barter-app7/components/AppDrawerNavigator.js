import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {BottomNavigator} from '../components/BottomNavigator';
import CustomSideBarMenu from '../components/CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyBarters from '../screens/MyBarters';
export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: BottomNavigator
  },
  Settings : {
  screen : SettingScreen
},
MyBarters:
{
  screen:MyBarters
},
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  })
