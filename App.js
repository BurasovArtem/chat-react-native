import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import ChatScreen from './screens/ChatScreen.js';
import AuthLoadingScreen from './screens/AuthLoadingScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Chat: ChatScreen
});

AppStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = navigation.state.index === 0;
  return {
    tabBarVisible
  };
};

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

const TabNavigator = createBottomTabNavigator(
  {
    Chats: AppStack,
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let imageName = require('./images/chat.png');
        if ( routeName === 'Profile' ) {
          imageName = require('./images/avatar.png');
        }
        return <Image source={imageName} style={{width: 25, resizeMode: 'contain', tintColor}} />;
      },
    })
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
