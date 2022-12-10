import React from "react";
import { FlatList,SafeAreaView} from "react-native";
import { useSelector } from "react-redux";

import {styles} from './styles'
import { Item ,Header } from "../../components/index";

const Animals =({navigation}) => {

    const categories = useSelector((state)=>state.category.categories)

    const onSelected = (item) => {
      navigation.navigate('Animal', {item})
    }


    const renderItem = ({ item }) => (
        <Item onSelected={onSelected} item={item}  />
      );


    return(

        <SafeAreaView style={styles.container}>
            <Header/>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
    )
}

export default Animals