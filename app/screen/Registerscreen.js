import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput,
  View } from 'react-native';
import {
  Button,

} from 'react-native-elements';

export default class registerscreen extends React.Component {
 constructor (props) {
   super(props);

   this.state ={
     screen: null,
     name: '',
     email: '',
     password: '',
     isValidLogin: false
   };
 }
  
  render() {
    const {screen} = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.phraseInput}
          value={this.state.name}
          placeholder="name"
          placeholderTextColor="white"
          keyboardType="name"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({name: text})}
          onSubmitEditing={this.handleSubmit}
        />
         <TextInput
          style={styles.phraseInput}
          value={this.state.email}
          placeholder="email"
          placeholderTextColor="white"
          keyboardType="name"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({email: text})}
          onSubmitEditing={this.handleSubmit}
        />
         <TextInput
          style={styles.phraseInput}
          value={this.state.password}
          placeholder="Password"
          placeholderTextColor="white"
          keyboardType="password"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({password: text})}
          onSubmitEditing={this.handleSubmit}
        />
        <Button
        text = "SIGNUP"
          

        />

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',

  },

  phraseInput: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    borderRadius: 50,
    padding: 15,
    backgroundColor: '#B14F6B',
    height: 50,
    },
});
