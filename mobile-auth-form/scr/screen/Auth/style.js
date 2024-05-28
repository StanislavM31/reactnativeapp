import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBDEF0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#7E49FF',
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
  no_acc:{
    padding:10,
    color:"#FFFF",
  },
  no_acc_link:{
    textDecorationLine: 'underline',
  }
});