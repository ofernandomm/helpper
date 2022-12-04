import React from "react";
import { View,Text, Button } from "react-native";
import {styles} from './styles'

const Animal =({navigation, route}) => {
    const {item} = route.params
    return(
        <View style={styles.container}>
            <Text>{item.id}</Text>
            <Button
                title="regresar home"
                color='green'
                onPress={()=>navigation.navigate('HomeScreen')}/>
        </View>
    )
}

export default Animal


