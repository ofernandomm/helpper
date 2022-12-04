import React from "react";
import { View,Text } from "react-native";
import {styles} from './styles'

const Animal =({route}) => {
    const {item} = route.params
    return(
        <View style={styles.container}>
            <Text>{item.id}</Text>
        </View>
    )
}

export default Animal


