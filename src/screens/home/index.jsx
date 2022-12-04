import React from "react";
import { View,Text, Button, ScrollView,StyleSheet, Dimensions, Image } from "react-native";
import {styles} from './styles'
import { Header } from "../../components"
import { Searchbar } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel'

const PRUEBA = [
    {
      title: "Conoce a Negro",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://www.petfriendlyhouse.com/wp-content/uploads/2018/03/dogs-with-shortest-lifespan.jpg",
    },
    {
      title: "Nuevo amigo",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-burnt-paws-heatwave-warning-signs-1657526574.jpg",
    },
    {
      title: "Más rescates",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://www.srperro.com/media/post/9712bcc0-976b-4a9a-b72a-cf1c9dea66dc.600x429.jpg.webp",
    },
  ];


const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)


const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styless.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styless.image}
      />
      <Text style={styless.header}>{item.title}</Text>
      <Text style={styless.body}>{item.body}</Text>
    </View>
  )
}



















const Home =({navigation}) => {
    const isCarousel = React.useRef(null)
    return(
        <ScrollView style={styles.containerScroll}>
            <View >
                <Header />
                <View style={styles.searchBarContainer}>
                <Searchbar
                placeholder="Search"
                style={styles.searchBar}
                />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >Últimas noticias</Text>
                </View>
                <Text style={styles.texto} >Estos son los avances más recientes en los casos que hemos atendido gracias a la ayuda de los helppers como tu. ¡Garcias!</Text>
                <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={PRUEBA}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
                />
                <Button
                title="Casos para ayudar"
                color='green'
                onPress={()=>navigation.navigate('Animals')}>
                </Button>
            </View>
        </ScrollView>
    )
}

const styless = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: ITEM_WIDTH,
      paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    image: {
      width: ITEM_WIDTH,
      height: 300,
    },
    header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 0,
      paddingLeft: 20,
      paddingRight: 20
    }
  })

export default Home