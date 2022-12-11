import React from "react";
import { View,Text, Button } from "react-native";
import { useSelector } from "react-redux";
import {styles} from './styles'

const Animal =({navigation}) => {
    const category=useSelector((state)=>state.category.selected)

    return(
        <View style={styles.container}>
            <Text>{category.id}</Text>
            <Button
                title="regresar home"
                color='green'
                onPress={()=>navigation.navigate('HomeScreen')}/>
        </View>
    )
}

export default Animal


