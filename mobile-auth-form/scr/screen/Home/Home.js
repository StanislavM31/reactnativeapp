import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export function Home({navigation}) {
  return (
    <NavigationContainer>
      <StackRouter.Navigator initialRouteName='Home'/>
      <Stack.Screen name='Home'component={Home}/>
      <View style={style.container}>
        <Button title='GET Started' onPress={()=>{navigation.navigate('Auth')}}/>
        </View>
    </NavigationContainer>
  );
}