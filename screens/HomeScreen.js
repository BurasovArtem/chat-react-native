import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  SafeAreaView,
  Image,
  Dimensions
} from 'react-native';
import firebase from 'firebase';
import styles from '../constants/Styles.js';
import User from '../constants/User.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  state = {
    users: [],
    dbRef: firebase.database().ref('users')
  }

  componentWillMount() {
    this.state.dbRef.on('child_added', (val) => {
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

  componentWillUnmount() {
    this.state.dbRef.off()
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
    const { height } = Dimensions.get('window');
    return(
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={(item) => item.phone}
          ListHeaderComponent={() => <Text style={{fontSize: 30, marginVertical: 10, marginLeft: 10, marginTop: 40, fontWeight: 'bold'}}>Chats</Text>}
        />
      </SafeAreaView>
    )
  }
}
