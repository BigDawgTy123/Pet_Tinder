import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, Image } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class Buyer_Screen extends React.Component{
  static navigationOptions = { header: null };
  render(){
    return (
      <View>
        <ImageBackground source={require("./assets/Pup_w_hue.png")}
            style = {{width: '100%', height: '100%'}}>

            <Text numberOfLines = {1} style={{flex: 1, marginTop: 250, fontWeight: 'bold',
                fontSize: 25, marginLeft: 45,fontFamily: 'Avenir Next', color: '#424242'}}>
                What do you want to buy?
           </Text>

           <TouchableOpacity
              style={styles.button}
              onPress={test()}>
              <Text style = {{fontSize: 20,fontFamily: 'Avenir Next',
                 color: '#424242', fontWeight: 'bold'}}> Dog
             </Text>
          </TouchableOpacity>

          <TouchableOpacity
             style={styles.button}
             onPress={test()}>
             <Text style = {{fontSize: 20,fontFamily: 'Avenir Next',
                color: '#424242', fontWeight: 'bold'}}> Cat
            </Text>
         </TouchableOpacity>

         <TouchableOpacity
            style={styles.button}
            onPress={test()}>
            <Text style = {{fontSize: 20,fontFamily: 'Avenir Next',
               color: '#424242', marginBottom: 300, fontWeight: 'bold'}}> Lizard
           </Text>
        </TouchableOpacity>

        </ImageBackground>
      </View>
    );
  }
}

function test(){
  return console.log('Button works');
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
