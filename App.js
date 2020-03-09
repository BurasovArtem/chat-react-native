import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import ChatScreen from './screens/ChatScreen.js';
import AuthLoadingScreen from './screens/AuthLoadingScreen.js';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Chat: ChatScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
