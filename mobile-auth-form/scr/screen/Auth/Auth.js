import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../Home/Home";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

export function Auth({ navigation }) {
  const [valueInp, setValueInput] = useState({
    email:"",
    password:""
  })
  addValue = () =>{
    setValueInput({...valueInp, [e.target.value]: e.target.value})
  }
  return (
    <View style={style.container}>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password" secureTextEntry={true}/>
        <Text onPress={()=>navigation.navigate("Sign up")}> Dont have an account?<Text>SignUP</Text></Text>
        <Button title="Login">Login</Button>
    </View>
  );
}
