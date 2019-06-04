import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

//import screens
import Welcome from './src/screen/Welcome';
import Discover from './src/screen/Discover';
const TabNavigator = new createBottomTabNavigator({
  Explore:{
    screen: Discover
  }
})

const StackNavigator = new createStackNavigator({
  Welcome: {
    screen: Welcome
    , navigationOptions:{ 
      header: null
    }
  },
  Explore: {
    screen: TabNavigator,
    navigationOptions:{
      header: null
    }
  }
})

const AppContainer = new createAppContainer(StackNavigator)
export default class App extends React.Component {

  render() {
    return (
      <AppContainer />
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
