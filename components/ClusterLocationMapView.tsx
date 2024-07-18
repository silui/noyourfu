import { Text, View ,StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

import MapView, {Marker} from 'react-native-maps';
import {Food, foodList} from '@/constants/Food';
import * as Location from 'expo-location';



export default function ClusterLocationMapView({foodList}) {
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


  return (
    <>
        {location ? ( 
            <MapView style={styles.map} showsUserLocation={true} region={{latitude:location.coords.latitude, longitude:location.coords.longitude, latitudeDelta: 0.0922,longitudeDelta: 0.0421}}>
                {foodList.map((marker, index) => (
                    <Marker
                    coordinate={{latitude: marker.restaurant_latitude, longitude: marker.restaurant_longitude}}
                    title={marker.restaurant_name}
                    description={marker.restaurant_address}
                    />
                ))}
            </MapView>
        ) : (<></>)}
    </>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {

        width: '100%',
        height: '100%',
    },
});
