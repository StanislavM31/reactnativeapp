import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9370DB',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  inp: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    marginVertical: 5,
    width: '80%',
    border: '2px solid #E228F0'
  },
  no_acc:{
    padding:10,
    color:"#FFFF",
  },
  no_acc_link:{
    textDecorationLine: 'underline',
  }
});