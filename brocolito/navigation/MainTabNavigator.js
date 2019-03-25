import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListScreen from '../screens/Lista_Deseos';
import Islas from '../screens/islas';
import Playas from '../screens/playas';
import Buceo from '../screens/Buceo';
import Arqueologia_Historia from '../screens/Arqueologia_Historia';
import Cuidades_Coloniales from '../screens/Cuidades_Coloniales';
import Naturaleza from '../screens/Naturaleza';
import Aviturismo from '../screens/Aviturismo';
import Aventura from '../screens/Aventura';
import Gastronomia_Cultura from '../screens/Gastronomia_Cultura';
import Negocios from '../screens/Negocios';
import MICE from '../screens/mice';


const DrawerNavigator = createDrawerNavigator(
  {
    Home:{
      screen: HomeScreen
    },
    Islas:{
      screen: Islas
    },
    Playas:{
      screen: Playas
    },
    Buceo:{
      screen: Buceo
    },
    Arqueologia_Historia:{
      screen: Arqueologia_Historia
    },
    Cuidades_Coloniales:{
      screen: Cuidades_Coloniales
    },
    Naturaleza:{
      screen: Naturaleza
    },
    Aviturismo:{
      screen: Aviturismo
    },
    Aventura:{
      screen: Aventura
    },
    Gastronomia_Cultura:{
      screen: Gastronomia_Cultura
    },
    Negocios:{
      screen: Negocios
    },
    MICE:{
      screen: MICE
    },
  },
  //DrawerConfig
);

//const HomeStack = createStackNavigator({
//  Home: HomeScreen,
//});

DrawerNavigator.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: ListScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Lista Deseos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  DrawerNavigator,
  //HomeStack,
  LinksStack,
  SettingsStack,
});
