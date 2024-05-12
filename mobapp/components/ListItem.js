import { StyleSheet, Text, TouchableHighlight } from "react-native";

export function ListItem({ el }) {
  return (
    <TouchableHighlight style={styles.main}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
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
