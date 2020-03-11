import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import User from '../constants/User.js';
import styles from '../constants/Styles.js';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  }

  state = {
    name: User.name,
    imageSource: require('../images/user.png')
  }

  _logOut = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  changeImage = () => {

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.changeImage}>
          <Image
            style={{ width: 100, height: 100, resizeMode: 'cover', marginBottom: 20 }}
            source={this.state.imageSource}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>{User.phone}</Text>
        <Text style={{fontSize: 20}}>{User.name}</Text>
        <TouchableOpacity style={{ position: 'absolute', bottom: 30, right: 30}} onPress={this._logOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
