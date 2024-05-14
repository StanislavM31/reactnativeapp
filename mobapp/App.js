//import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";
import { Form } from "./components/Form";
import { useState } from "react";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", key: '~1' },
    { text: "Купить картошку", key: '~2' },
    { text: "Выучить ReactNative", key: '~3' },
    { text: "Получить оффер", key: '~4' },
  ]);
 const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }
  const deleteHandler = (key) => {
/*     const filtered = listOfItems.filter((el)=> el.key !== key)
    setListOfItems(filtered); */
/*     setListOfItems((list) => {
      return list.filter((listItem) => {
        return listItem.key !== key;
      });
    }) */
    setListOfItems((list) => {
      return list.filter((listItem) => listItem.key !== key);
    });
  }


  return (
    /*     <View style={styles.container}>
      <Text>Here we go!</Text>
      <StatusBar style="auto" />
    </View> */
    <View>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}/>
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
