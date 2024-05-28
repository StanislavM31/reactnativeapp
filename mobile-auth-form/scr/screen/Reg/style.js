import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6EAF8',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#3498DB',
  },
  inp: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    marginVertical: 5,
    width: '80%',
    border: '2px solid #F2F3F4',
  },
  toauth:{
    padding:10,
    color:"#FFFF",
  },
  toauth_link:{
    textDecorationLine: 'underline',
  }
})