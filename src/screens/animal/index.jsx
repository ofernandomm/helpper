import React from "react";
import { View,Text, Button, Image, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cart.action";
import {styles} from './styles'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

const Animal =({navigation}) => {
    const dispatch=useDispatch();
    const category=useSelector((state)=>state.category.selected)

    const onAddToCart=()=>{
        dispatch(addToCart(category))
    }


    return(
        <View style={styles.container}>
            <Text>Caso # {category.id}</Text>
            <Text>{category.title}</Text>
            <Image source={category.img} style={{width: ITEM_WIDTH,
        height: 300}} />
                <Button
                title="regresar home"
                color='green'
                onPress={()=>navigation.navigate('HomeScreen')}/>
                <Button
                title="ayudar"
                color='green'
                onPress={onAddToCart}/>
        </View>
    )
}

export default Animal


