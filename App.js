/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Judul from './Component/Judul';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container} >
        <Judul title="LOGIN"/>
        <Judul title="BIIODATA"/>
        <Judul title="SISWA"/>
        <Text>Fauzan Ardhiansyah</Text>
        <Text>XI RPL 3</Text>
        <Text>21</Text>
        <Image source={require('./2.jpg')}
       style={{width: 300, height: 250}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00C9FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
