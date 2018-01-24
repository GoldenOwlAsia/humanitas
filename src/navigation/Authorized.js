import React from 'react'
import { Image } from 'react-native'
import { TabNavigator, StackNavigator, TabView } from 'react-navigation'
import HomeTab from '../components/home'

// ListTabs
const ListTabs = TabNavigator({
    Home: { screen: HomeTab, },
    Notifications: { screen: HomeTab, },
  }, {
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
      },
      showLabel: true,
    },
    tabBarPosition: 'bottom',
    lazy: true,
  });

export default ListTabs;
