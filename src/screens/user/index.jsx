import React, { useState,} from "react";
import { Text,View, Image,Dimensions,Alert, Button, ScrollView} from 'react-native';
import {styles} from './styles'
import { Header } from "../../components";
import * as Location from "expo-location";

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)


const User =({navigation}) => {

  const [pickedLocation, setPickedLocation] = useState({});

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitas dar permisos para acceder a la ubicacion", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };



const onHandleGetLocation = async () => {
  const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
})

const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });

};

      return (
      <ScrollView style={styles.containerScroll}>
        <View>
          <View style={styles.container}>
              <Header/>
              <View style={styles.bienvenidaContainer}>
                <Text style={styles.bienvenida}> ¡Hola! Antonia</Text>
              </View>
              <Image source={require('../../../assets/user.png')} style={{width: ITEM_WIDTH,
          height: 300}}/>
          </View>
          <View style={styles.containerMap}>
            <View style={styles.preview}>
                <Text>{`latitud: ${pickedLocation.lat}, longitud: ${pickedLocation.lat} `}</Text>
            </View>
            <View>
              <Button title="Obtener ubicacion" color='red' onPress={onHandleGetLocation} />
            </View>
          </View>
        </View>
      </ScrollView>
      );
}

export default User
