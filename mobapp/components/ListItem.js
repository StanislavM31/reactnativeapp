import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity onPress={()=>deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginLeft: "20%",
    width: "60%",
  },
});
