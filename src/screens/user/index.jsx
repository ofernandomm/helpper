import React from "react";
import { View,Text, Button } from "react-native";
import {styles} from './styles'
import { Header } from "../../components";

const User =({navigation}) => {
    return(
        <View style={styles.container}>
            <Header />
        </View>
    )
}

export default User