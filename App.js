import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, Image } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Welcome_Screen from './Welcome.js'
import Buyer_Screen from './Buyer.js'
import Seller_Screen from './Seller.js'
import Dog_Info from './Dog.js'

const appNavigator = createStackNavigator({
  Welcome: {screen: Welcome_Screen},
  Buyer: {screen: Buyer_Screen},
  Seller: {screen: Seller_Screen},
  Dog: {screen: Dog_Info},
});

export default createAppContainer(appNavigator);
