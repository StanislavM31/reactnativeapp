import { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export function Form({ addHandler }) {
    const [text, setValue] = useState('');

    const onChange = (task) => {
        setValue(task)
    }
    const addTask = () =>{
      addHandler(text);
      setValue('');
    }
  return (
    <View >
      <TextInput style={styles.input} value={text} onChangeText={onChange} placeholder="добавьте дело"/>
      
      <View style={styles.buttonContainer}>
        <Button onPress={addTask} title="Добавить" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
      borderBottomWidth: 2,
      borderColor: '#000',
      textAlign: 'center',
      padding: 10,
      marginVertical: 20,
      marginHorizontal: '20%',
      width: '60%',
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '60%',
    borderRadius: 8,
  },
});
