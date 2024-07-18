import { Text, Image, ScrollView, View, TouchableOpacity  } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { Stack } from 'expo-router';
import Emoji from 'react-native-emoji'


import SingleLocationMapView from '@/components/SingleLocationMapView';
import {foodList} from '@/constants/Food';

export default function foodId() {
    const id = useLocalSearchParams();
    var id_num = +id.id-1;
    return (
        <>
              <Stack.Screen
        options={{
          title: foodList[id_num].food_name,

          headerBackTitleStyle: { fontSize: 0 },
        }}
      />
        <ImageHeaderScrollView
            maxHeight={300}
            minHeight={0}
            headerImage={foodList[id_num].image_link}
            minOverlayOpacity={0}
            maxOverlayOpacity={0.7}
            overlayColor="black"
            disableHeaderGrow

            >
            <Text numberOfLines={1} adjustsFontSizeToFit style={{textAlign: 'center', fontSize:32}} >
                🏬:{foodList[id_num].restaurant_name}
            </Text>
            <Text/>
            <Text numberOfLines={1} adjustsFontSizeToFit style={{fontSize:20}}>
                🗺️:{foodList[id_num].restaurant_address}
            </Text>
            <View style={{ height: 1000 }}>
                <SingleLocationMapView
                    latitude={foodList[id_num].restaurant_latitude}
                    longitude={foodList[id_num].restaurant_longitude}
                    pin_name={foodList[id_num].restaurant_name}
                    pin_description={foodList[id_num].restaurant_address}
                />
            </View>
      </ImageHeaderScrollView>
        </>

);
}
