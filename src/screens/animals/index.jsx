import React from "react";
import { FlatList,SafeAreaView} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import{selectCategory} from  '../../store/actions'

import {styles} from './styles'
import { Item ,Header } from "../../components/index";

const Animals =({navigation}) => {


    const dispatch=useDispatch()
    const categories = useSelector((state)=>state.category.categories)

    const onSelected = (item) => {
      dispatch(selectCategory(item.id))
      navigation.navigate('Animal')
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