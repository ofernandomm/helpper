import React from "react";
import { View,Text, Button, ScrollView } from "react-native";
import {styles} from './styles'
import { Header } from "../../components"

const Home =({navigation}) => {
    return(
        <ScrollView style={styles.containerScroll}>
            <View >
                <Header />
                <Text style={styles.title} >Home</Text>
                <Button
                title="go to animals"
                color='green'
                onPress={()=>navigation.navigate('Animals')}>
                </Button>
            </View>
        </ScrollView>
    )
}

export default Home