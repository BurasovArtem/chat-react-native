import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  SafeAreaView,
  Image
} from 'react-native';
import firebase from 'firebase';
import styles from '../constants/Styles.js';
import User from '../constants/User.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Chats',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../images/avatar.png')}
            style={{width: 32, height: 32, marginRight: 7}}
          />
        </TouchableOpacity>
      )
    }
  }

  state = {
    users: []
  }

  componentWillMount() {
    let dbRef = firebase.database().ref('users');
    dbRef.on('child_added', (val) => {
      let person = val.val();
      person.phone = val.key;
      if (person.phone === User.phone) {
        User.name = person.name
      }
      else {
        this.setState((prevState) => {
          return {
            users: [...prevState.users, person]
          }
        })
      }
    })
  }

  _logOut = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  renderRow = ({item}) => {
    return (
      <TouchableOpacity
        style={{padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1}}
        onPress={() => this.props.navigation.navigate('Chat', item)}
      >
        <Text style={{fontSize: 20}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return(
      <SafeAreaView>
        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={(item) => item.phone}
        />
        <TouchableOpacity style={{ position: 'absolute', top:560, left: 300}} onPress={this._logOut}>
          <Image
            source={require('../images/logout.png')}
            style={{width: 32, height: 32, marginRight: 7}}
          />
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
