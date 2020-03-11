import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import User from '../constants/User.js';
import firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyAIY7NVZP49D0PCvT3XWkbc4lwlfwTPT3g",
      authDomain: "chatapp-26c46.firebaseapp.com",
      databaseURL: "https://chatapp-26c46.firebaseio.com",
      projectId: "chatapp-26c46",
      storageBucket: "chatapp-26c46.appspot.com",
      messagingSenderId: "530735283369",
      appId: "1:530735283369:web:1ecd052d0db0c618387db8"
    };

    firebase.initializeApp(firebaseConfig);

  }

  _bootstrapAsync = async() => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  render() {
    return(
      <View>
        <ActivityIndicator />
        <StatusBar barstyle='default' />
      </View>
    );
  }
}
