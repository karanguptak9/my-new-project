import React from 'react';
import {Button} from 'react-native-elements';
import { StyleSheet, Text, View, Image } from 'react-native';

import RegisterScreen from '/Users/karangupta/Desktop/my-new-project/app/screen/Registerscreen.js'
import LoginScreen from '/Users/karangupta/Desktop/my-new-project/app/screen/Loginscreen.js'

export default class Landingscreen extends React.Component {
  
  constructor(props){
  super(props);

  this.state= {
    currentScreen: null
  }
}

renderContent(){
  const { currentScreen} = this.state

  if(currentScreen === 'Login'){
    return <LoginScreen/>
  } else if ( currentScreen === 'Register'){
    return <Registerscreen/>
  }else {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
      <Image
          style={{width: 150, height: 200}}
          source={{uri: '/Users/karangupta/Desktop/my-new-project/assets/lion.png'}}
        />
      </View>
       
     <View style={styles.buttonContainer}>
        <Button
        text='Login'
        onPress={() => this.setState({currentScreen: 'Login'})}

        />
        <Button
        text='Register'
        onPress={() => this.setState({currentScreen: 'Register'})}
        />
        </View>
    </View>
  );
  }
}

  
  
  
  render() {
    return (
    this.renderContent()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#794F6B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    height: 100,
    flexDirection:'row',
    
  },

  logoContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#B14F6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
