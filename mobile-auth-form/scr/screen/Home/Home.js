import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../Auth/Auth';

const Stack = createStackNavigator();

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title='Get Started' onPress={() => { navigation.navigate('Auth') }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
    justifyContent: 'center',
  },
});