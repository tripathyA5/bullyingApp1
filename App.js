import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import RequestScreen from './screens/RequestScreen'

const SwitchNavigator =  createSwitchNavigator({
  HomeScreen : {screen :HomeScreen},
  RequestScreen : {screen : RequestScreen}
})
const AppContainer = createAppContainer(SwitchNavigator)
export default function App() {
  return (
    <View style={styles.container}>
      
     <AppContainer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
