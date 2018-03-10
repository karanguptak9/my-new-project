import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { icon, Button } from 'react-native-elements';


export default class profilescreen extends React.Component {

  constructor(props){
    super(props);
  }
  render() {
    const {profilescreen} = this.props
    return (
      <View style={styles.container}>
       <View style = {styles.profilecover}>
          
          
          </View>
       
       <View style = {styles.profileinfo}>
          
          
          
          </View>

        <View style = {styles.buttonLogout}>
          <Button
          text="LOGOUT"
          style={{
            width: 250,
            height: 200,
          }}
          />
          
          </View>
          


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',

  },

  profilecover:{
    backgroundColor: 'green',
    flex: 1,
  },

  profileinfo:{
    backgroundColor: '#0F5',
  flex: 1,
  },

  buttonLogout:{
  backgroundColor: '#000',
  flex: 2,
  justifyContent: 'center',
  

  },

  
  
 
  
});
