import { StyleSheet } from 'react-native';

 export const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   listContainer: {
     flex: 1,
     backgroundColor: 'white',
   },
   footer: {
     backgroundColor: 'white',
     borderTopWidth: 1,
     borderTopColor: 'blue',
     paddingVertical: 10,
     marginBottom: 10,
     marginHorizontal: 10,
   },
   buttonConfirm: {
     backgroundColor: 'white',
     borderRadius: 5,
     paddingHorizontal: 20,
     paddingVertical: 15,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
   },
   textButtonConfirm: {
     fontSize: 14,
     fontFamily: 'Lato-Regular',
   },
   totalContainer: {
     flex: 0.4,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
   },
   textTotalTitle: {
     fontSize: 14,
     fontFamily: 'Lato-Regular',
   },
   textTotal: {
     fontSize: 16,
     fontFamily: 'Lato-Bold',
   },
 });