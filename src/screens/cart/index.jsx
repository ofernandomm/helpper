import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import { removeFromCart, confirmCart } from '../../store/actions';

import { CartItem } from '../../components';
import { styles } from './styles';

const Cart = ({ navigation }) => {
   const dispatch =useDispatch()
   const cart = useSelector((state)=>state.cart.items)
   const total = useSelector((state)=>state.cart.total)
   const onDelete = (id) => {
     dispatch(removeFromCart(id));
   };
   const onCreateOrder = () => {
    dispatch(confirmCart(cart, total));
    console.log(confirmCart(cart, total))
  };

   const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
   const keyExtractor = (item) => item.id.toString();
   return (
     <View style={styles.container}>
       <Text>Cart</Text>
       <View style={styles.listContainer}>
         <FlatList
           data={cart}
           renderItem={renderItem}
           style={styles.listContainer}
           keyExtractor={keyExtractor}
         />
       </View>
       <View style={styles.footer}>
         <TouchableOpacity disabled={cart.length == 0} style={styles.buttonConfirm} onPress={onCreateOrder}>
           <Text style={styles.textButtonConfirm}>Confirm</Text>
           <View style={styles.totalContainer}>
             <Text style={styles.textTotalTitle}>Total</Text>
             <Text style={styles.textTotal}>${total}</Text>
           </View>
         </TouchableOpacity>
       </View>
     </View>
   );
 };

 export default Cart