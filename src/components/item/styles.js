import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent:'space-around',

  },
  title: {
    fontSize: 20,
    fontWeight:'bold',
  },
  textos:{
    flexDirection:'column',
    justifyContent:'center'
  }
});