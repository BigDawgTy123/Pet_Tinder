import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, Image} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class Welcome_Screen extends React.Component {
  static navigationOptions = { header: null };
  render(){
    return (
      <ImageBackground source={require("./assets/Loading_Screen.png")}
          style={{width: '100%', height: '100%'}}>
          <Text numberOfLines = {1} style={{flex: 1, marginTop: 350, fontWeight: 'bold',
              fontSize: 25, marginLeft: 38,fontFamily: 'Avenir Next', color: '#424242'}}>
              Are you buying or selling?
         </Text>

         <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Buyer' })
                ],
              }))
            }}>
            <Text style = {{fontSize: 20,fontFamily: 'Avenir Next',
               color: '#424242', fontWeight: 'bold'}}> Buying
           </Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.props.navigation.dispatch(StackActions.reset({
               index: 0,
               actions: [
                 NavigationActions.navigate({ routeName: 'Seller' })
               ],
             }))
           }}>
           <Text style = {{fontSize: 20,fontFamily: 'Avenir Next',
              color: '#424242', marginBottom: 300, fontWeight: 'bold'}}> Selling
          </Text>
       </TouchableOpacity>

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
