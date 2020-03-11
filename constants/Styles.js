import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    borderRadius: 40,
    width: '90%',
    marginBottom: 30,
  },
  inputChat: {
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#1a1c1a',
    borderRadius: 40,
    width: '80%',
    marginBottom: 10
  },
  btn: {
    marginTop: 50,
    marginHorizontal: 30,
    backgroundColor: '#e9446a',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    height: 60
  },
  btnSend: {
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 15,
    height: 40,
    width: 40,
    paddingTop: 10,
    paddingLeft: 5,
    backgroundColor: '#e9446a',
    borderRadius: 20
  }
});

export default styles;
