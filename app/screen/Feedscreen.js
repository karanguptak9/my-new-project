import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { SOCIAL_FEED_MOCK_DATA } from '../constants/SOCIAL_FEED_MOCK_DATA';
import { Ionicons } from '@expo/vector-icons';


export default class Feedscreen extends React.Component {
  
  _renderItem = ({item}) => {
    return (
      <View style = {styles.itemContainer}>
        <View style={styles.headerContainer}>
          <Image
          source = {{uri: item.image}}
          style={{
            height: 50,
            width: 50,
            borderRadius: 20,
            marginLeft: 10,
            backgroundColor: '#000'
          
          }}
          />
          <View style = {styles.nameContainer}>
            <Text> {item.name} </Text>
            <Text>{item.location} </Text>
          </View>
        </View>

        <View style = {styles.imageContainer}>  
          <Image
          source = {{uri: item.post["image"]}}
          style={{
            width:'100%',
            height: 300
          }}
          />
          <View style = {styles.captionContainer} >
            <View style = {styles.buttonContainer}>
            <Ionicons
              name="ios-heart-outline"
              size={35}
              color='#085947'
              style={{
                paddingLeft: 10,
                
              }}
              />

            <Ionicons
              name="ios-chatbubbles-outline"
              size={35}
              color='#085947'
              style={{
                paddingLeft: 270,
              
              }}
            />
            </View>
            <Text>{item.post.caption} </Text>
            <Text>{item.post.date} </Text>
            </View>
          </View>
      </View>
    )
  }
  
  render() {
    return (
     <ScrollView style = {styles.container}>
     <FlatList
     data = {SOCIAL_FEED_MOCK_DATA}
    renderItem={({item}) => this._renderItem({item})}
    style = {styles.listContainer}
     />
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexGrow: 1,
  },

  listContainer: {
    flexGrow: 1,
  },

  itemContainer: {
        flex: 1,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nameContainer:{
    flexDirection: 'column',
  },
  imageContainer:{
    flex: 1,
    flexDirection: 'column',
  },
  buttonContainer:{
    flexDirection: 'row',
    marginLeft: 10,
  },
  captionContainer: {
    backgroundColor: '#B14F6B',
  },
});
