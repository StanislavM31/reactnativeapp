import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";
import { Form } from "./components/Form";
import { useState } from "react";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", index: 1 },
    { text: "Помыть машину", index: 2 },
    { text: "Купить картошку", index: 3 },
    { text: "Стать миллионером", index: 4 },
  ]);
  return (
    /*     <View style={styles.container}>
      <Text>Here we go!</Text>
      <StatusBar style="auto" />
    </View> */
    <View>
      <Header />
      <Form/>
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
