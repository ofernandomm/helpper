import React from 'react';
import { Text,View} from 'react-native';
import {styles} from './styles'
import { Header } from "../../components";


const User =({navigation}) => {
      return (
        <View style={styles.container}>
            <Header/>
            <Text> user </Text>
        </View>
      );
}

export default User
