import React from "react";
import { FlatList,SafeAreaView} from "react-native";
import { CATEGORIES } from "../../constants/data/index";
import {styles} from './styles'
import { Item ,Header } from "../../components/index";

const Animals =({navigation}) => {

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
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
    )
}

export default Animals