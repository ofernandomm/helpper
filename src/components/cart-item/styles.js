import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 125,
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'red',
      paddingVertical: 10,
      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      margin: 10,
    },
    headerContainer: {},
    header: {
      fontSize: 16,
      fontFamily: 'Lato-Bold',
      color:'black',
      marginBottom: 5,
    },
    contentContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    content: {
      flex: 1,
    },
    quantity: {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      color: 'black',
      marginBottom: 5,
    },
    price: {
      fontSize: 16,
      fontFamily: 'Lato-Bold',
      color: 'black',
      marginVertical: 10,
    },
  });