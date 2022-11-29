import React from "react";
import { View,Text, Button } from "react-native";
import {styles} from './styles'

const Home =({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Home</Text>
            <Button
            title="go to animals"
            color='green'
            onPress={()=>navigation.navigate('Animals')}>
            </Button>
        </View>
    )
}

export default Home