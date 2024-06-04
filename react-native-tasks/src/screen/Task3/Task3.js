import { useState } from "react";
import {
  Button,
  Image,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";

export function Task3({ navigation }) {
    const[size, setSize] = useState(18);
    function makeBiggerFont(){
        setSize(size+1);
    }
    function makeLittleFont(){
        setSize(size-1);
    }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: size }}>
        3. Cоздайте компонент, который предоставляет две кнопки: "Увеличить" и
        "Уменьшить". При нажатии на эти кнопки значение font-size изменяется
        соответствующим образом на+/–1px (useState).
      </Text>
      <Button title='Увеличить шрифт' onPress={()=>makeBiggerFont()}/>
      <Button title='Уменьшить шрифт' onPress={()=>makeLittleFont()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
},

});
