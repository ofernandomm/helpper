import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'

const Item = ({ onSelected, item }) => (
    <TouchableOpacity
    onPress={()=>onSelected(item)}>
        <View style={styles.item}>
          <Image source={item.img} style={{height:100, width:100}} />
          <View style={styles.textos}>
            <Text style={styles.title}>{item.title}</Text>
            <Text >Conoce más </Text>
          </View>
          <AntDesign name="rightcircle" size={24} color="black" />
        </View>
    </TouchableOpacity>
  );

export default Item