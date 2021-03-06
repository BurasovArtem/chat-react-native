import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';
import firebase from 'firebase';
import styles from '../constants/Styles.js';
import User from '../constants/User.js';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    phone: '',
    name: ''
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  submitForm = async () => {
    if (this.state.phone.length < 10) {
      alert('Error', 'Wrong phone number')
    }
    else if (this.state.name.length < 3) {
      alert('Error', 'Wrong name')
    }
    else {
      await AsyncStorage.setItem('userPhone',this.state.phone);
      User.phone = this.state.phone;
      firebase.database().ref('users/' + User.phone).set({name: this.state.name});
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Phone number...'
          keyboardType='number-pad'
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}
        />
        <TextInput
          placeholder='Name...'
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity style={styles.btn} onPress={this.submitForm}>
          <Text style={{color: '#fff', fontSize: 32, padding: 40, fontWeight: '500'}}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
