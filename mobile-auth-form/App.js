import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './scr/screen/Home/Home'
import Auth from './scr/screen/Auth/Auth'
import Reg from './scr/screen/Reg/Reg'

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <StackRouter.Navigator initialRouteName='Home'/>
      <Stack.Screen name='Home'component={Home}/>
      <Stack.Screen name='Sign In'component={Auth}/>
      <Stack.Screen name='Sign Up'component={Reg}/>
    </NavigationContainer>
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
