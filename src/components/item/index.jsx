import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Item = ({ onSelected, item }) => (
    <TouchableOpacity
    onPress={()=>onSelected(item)}>
        <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.id}</Text>
        </View>
    </TouchableOpacity>
  );

export default Item