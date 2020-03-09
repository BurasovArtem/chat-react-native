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
    
    // apikey

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
