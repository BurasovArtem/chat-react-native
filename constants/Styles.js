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
    borderRadius: 4,
    width: '90%',
    marginBottom: 30,
  },
  btn: {
    marginTop: 50,
    marginHorizontal: 30,
    backgroundColor: '#e9446a',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;
