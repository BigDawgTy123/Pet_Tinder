import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, Image} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class Seller_Screen extends React.Component {
  static navigationOptions = { header: null };
  render(){
    return(
      <ImageBackground source={require("./assets/Pup_w_hue.png")}
          style={{width: '100%', height: '100%'}}>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    padding: 25
  },
})
