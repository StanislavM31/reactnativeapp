import { StyleSheet, Text, View } from 'react-native';

export function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    marginBottom: 20,
    height: 120,
    backgroundColor: 'silver',
  },
  text:{
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
  }
});
