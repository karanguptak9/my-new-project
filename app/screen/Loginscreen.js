import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input} from 'react-native-elements';

export default class Loginscreen extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      username: '',
      password: '',
    }
  }

  isDisabled = () => {
    const { username, password} = this.state;
    return !(username.length > 5 && password.length > 5)
  }
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
        <Input
        placeholder = 'Username'
        onChangeText = {(text) => this.setState({username: text})}
        value={this.state.username}
        />

        <Input
        placeholder = 'Password'
        secureTextEntry = {true}
        onChangeText = {(text) => this.setState({password: text})}
        value={this.state.password}
        />
        
        <Button
        text= 'Login'
        disabled={this.isDisabled()}
        style = {this.isDisabled() ? 'blue' : 'green'}
        />
        </View>
      </View>
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
