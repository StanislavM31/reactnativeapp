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
    const checkInps = () => {
		try {
			if (!valueInp.email.trim()) throw new Error('Пустое поле  email')
			if (!/^[A-z0-9\.\+\_\-]+@[a-z\.]+\.{1}[a-z]{2,4}$/gm.test(valueInp.email)) throw new Error('Email is invalid')
			if (!valueInp.password.trim()) throw new Error('Пустое поле Password')


			console.log(`Success ${valueInp}`);
		} catch (error) {
			console.log(error.message);
		}
	}
    return (
        <View style = {styles.container}>
            <TextInput style={styles.inp} onChangeText={(value)=> addValue(value,'email')} placeholder="email"/>
            <TextInput style={styles.inp} onChangeText={(value)=> addValue(value, 'password')} placeholder="password" secureTextEntry={true}/>
            <Text style={styles.no_acc}>Нет акаунта? <Text style={styles.no_acc_link} onPress={()=>navigation.navigate('Sign Up')}>Sign Up (Зарегистрироваться)</Text></Text>
            <Button title="Login" onPress={checkInps}></Button>
        </View>
    )
}