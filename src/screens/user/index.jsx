import React from 'react';
import { Text} from 'react-native';
import {styles} from './styles'
import { Header } from "../../components";
import { View } from 'react-native-web';


const User =({navigation}) => {
      return (
        <View style={styles.container}>
            <Header/>
            <Text> user </Text>
        </View>
      );
}

export default User
