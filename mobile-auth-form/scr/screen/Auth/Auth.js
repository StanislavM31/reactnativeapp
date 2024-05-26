import { Button, Text, View, Pressable } from "react-native";
import styles from './style'
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

/* export default function Auth({navigation}){
    const [valueInp, setValueInp] = useState({
        email:"",
        passwor:"",
    });
    const changeValue = (value, name) =>{
        setValueInp(
            {...valueInp, [name] : value }
        )
    }
    return (
        <View style = {styles.container}>
            <TextInput style={styles.inp} onChangeText={(value)=> addValue(value,'email')} placeholder="email"/>
            <TextInput style={styles.inp} onChangeText={(value)=> addValue(value, 'password')} placeholder="password" secureTextEntry={true}/>
            <Text style={styles.no_acc}>Нет акаунта? <Text style={styles.no_acc_link} onPress={()=>navigation.navigate('Sign Up')}>Sign Up (Зарегистрироваться)</Text></Text>
            <Button title="Login"></Button>
        </View>
    )
} */

export default function Auth({navigation}){
    const [valueInp, setValueInp] = useState({
        email:"",
        passwor:"",
    });
    const changeValue = (value, name) =>{
        setValueInp(
            {...valueInp, [name] : value }
        )
    }
    return (
        <View style = {styles.container}>
            <TextInput style={styles.inp} onChangeText={(value)=> addValue(value,'email')} placeholder="email"/>
            <TextInput style={styles.inp} onChangeText={(value)=> addValue(value, 'password')} placeholder="password" secureTextEntry={true}/>
            <Text style={styles.no_acc}>Нет акаунта? <Text style={styles.no_acc_link} onPress={()=>navigation.navigate('Sign Up')}>Sign Up (Зарегистрироваться)</Text></Text>
            <Button title="Login"></Button>
        </View>
    )
}