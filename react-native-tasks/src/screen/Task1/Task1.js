import { Button, Text, TextInput } from "react-native";
import React, { useState } from "react";

export function Task1() {
  const [inp, setInp] = useState({});

  function isInp(name, value) {
    setInp({ ...inp, [name]: value });
  }

  function isShow() {
    console.log(inp);
  }

  return (
    <>
      <Text>
        Task1. 1. Реализуйте форму для ввода почты и пароля. По клику на кнопку
        получите данные из полей ввода с использованием useState. Напишите для
        них валидацию. В случае успешного ввода отобразите в console.log
        сообщение "success".
      </Text>
      <TextInput
        placeholder="email"
        onChangeText={(value) => isInp("email", value)}
      />
      <TextInput
        placeholder="password"
        onChangeText={(value) => isInp("password", value)}
        secureTextEntry={true}
      />
      <Button title="click" onPress={isShow} />
    </>
  );
}
