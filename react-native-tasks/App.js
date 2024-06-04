import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home/Home';
import {Task1} from './src/screen/Task1/Task1'
import {Task2} from './src/screen/Task2/Task2'
import {Button, Text, TextInput } from "react-native";

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Task1' component={Task1}></Stack.Screen>
        <Stack.Screen name='Task2' component={Task2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}