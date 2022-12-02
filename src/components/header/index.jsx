import React from "react";
import { View,Text, Image } from "react-native"
import {styles} from "./styles"


const Header = () =>{

    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={{ width: 200, height: 50 }} />
        </View>
    );
}

export default Header