import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Registerscreen from './app/screen/Registerscreen.js'
import Loginscreen from './app/screen/Loginscreen.js'
import Landingscreen from './app/screen/Landingscreen.js'
import Feedscreen from './app/screen/Feedscreen.js'
import Profilescreen from './app/screen/Profilescreen.js'


export default class App extends React.Component {
  render() {
    return (
     <Registerscreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
