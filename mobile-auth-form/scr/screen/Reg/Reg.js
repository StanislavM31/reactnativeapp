import { Button, Text, View, Pressable } from "react-native";
import styles from './style'
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

export default function Reg({navigation}){
    const [value, setValue] = useState({
        email:"",
        passwor:"",
    })
    return (
        <View style = {styles.container}>
            <TextInput style={[styles.inp, { placeholderTextColor: '#64748B' }]} placeholder="email"/>
            <TextInput style={[styles.inp, { placeholderTextColor: '#64748B' }]} placeholder="password" secureTextEntry={true}/>
            <Text style={styles.toauth}>есть акаунт? <Text style ={styles.toauth_link} onPress={()=>navigation.navigate('Sign In')}>Sign In (Авторизоваться)</Text></Text>
            <Button title="Registration"></Button>
        </View>
    )
}