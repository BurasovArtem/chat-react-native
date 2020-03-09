import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput
} from 'react-native';
import User from '../constants/User.js';
import styles from '../constants/Styles.js';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  }

  state = {
    name: User.name
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 20}}>{User.phone}</Text>
        <Text style={{fontSize: 20}}>{User.name}</Text>
      </SafeAreaView>
    )
  }
}
