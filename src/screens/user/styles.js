import { StyleSheet,StatusBar } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    containerMap:{
      flex: 1,
      paddingTop:120
    },
    bienvenida:{
      fontSize:25
    },
    bienvenidaContainer:{
      padding:30,
      alignItems:'center'
    },
    preview: {
      width: "100%",
      height: 200,
      marginBottom: 20,
      justifyContent: "center",
      alignItems: "center",
      borderColor: 'red',
      borderWidth: 1,
    },
    containerScroll:{
      flex:1
  },
})