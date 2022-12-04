import React from 'react';
import { Text,View, Image,Dimensions} from 'react-native';
import {styles} from './styles'
import { Header } from "../../components";

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

const User =({navigation}) => {
      return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.bienvenidaContainer}>
              <Text style={styles.bienvenida}> ¡Hola! Antonia</Text>
            </View>
            <Image source={require('../../../assets/user.png')} style={{width: ITEM_WIDTH,
        height: 300}}/>
        </View>
      );
}

export default User
