import {Button, Text, TextInput } from "react-native";


export default function Home({ navigation }) {
    return (
        <>
            <Text onPress={() => navigation.navigate('Task1')}>Перейти к 1 задаче</Text>
            <Text onPress={() => navigation.navigate('Task2')}>Перейти к 2 задаче</Text>
        </>
    );
}

