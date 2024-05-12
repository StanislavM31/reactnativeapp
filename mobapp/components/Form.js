import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export function Form() {
    const [value, setValue] = useState();

    function onChange(text){
        setValue(text);
    }
  return (
    <View style={styles.main}>
      <TextInput style={styles.input} onChange={onChange} placeholder="добавьте дело"/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
      borderBottomWidth: 2,
      borderColor: '#000',
      textAlign: 'center',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  },
});
