import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../Home/Home";
import { TextInput } from "react-native-gesture-handler";

export function Auth({ navigation }) {
  return (
    <View style={style.container}>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password" secureTextEntry={true}/>
    </View>
  );
}
