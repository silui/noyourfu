import { Text, View ,StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';


export default function SingleLocationMapView({latitude, longitude, pin_name, pin_description}) {
    return (
        <>
            <MapView style={styles.map} region={{latitude:latitude, longitude:longitude, latitudeDelta: 0.0922,longitudeDelta: 0.0421}}>
                <Marker
                coordinate={{latitude: latitude, longitude: longitude}}
                title={pin_name}
                description={pin_description}
                />
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {

        width: '100%',
        height: '27%',
    },
});