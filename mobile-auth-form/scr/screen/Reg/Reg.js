import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Home/Home'


export function Reg() {
  return (
    <NavigationContainer>
      <StackRouter.Navigator initialRouteName='Home'/>
      <Stack.Screen name='Home'component={Home}/>
    </NavigationContainer>
  );
}