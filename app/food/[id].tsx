import { Text, View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { ImageHeaderScrollView } from 'react-native-image-header-scroll-view';
import Entypo from '@expo/vector-icons/Entypo';
import SingleLocationMapView from '@/components/SingleLocationMapView';
import { menuItems, restaurants } from '@/constants/Food';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FoodDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { language } = useLanguage();
  const menuItem = menuItems.find(m => m.id === Number(id));
  const restaurant = restaurants.find(r => r.id === menuItem?.restaurant_id);

  if (!menuItem || !restaurant) return null;

  const itemName = language === 'en' ? menuItem.name_en : menuItem.name_zh;
  const restaurantName = language === 'en' ? restaurant.name_en : restaurant.name_zh;
  const restaurantAddress = language === 'en' ? restaurant.address_en : restaurant.address_zh;

  return (
    <>
      <Stack.Screen
        options={{
          title: itemName,
          headerBackTitleStyle: { fontSize: 0 },
        }}
      />
      <ImageHeaderScrollView
        maxHeight={300}
        minHeight={0}
        headerImage={restaurant.image_link}
        minOverlayOpacity={0}
        maxOverlayOpacity={0.7}
        overlayColor="black"
        disableHeaderGrow
      >
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{ textAlign: 'center', fontSize: 28, marginTop: 16, marginHorizontal: 16, fontWeight: '700' }}
        >
          {itemName}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 8 }}>
          <Entypo name="location" size={18} color="#f3ce45" />
          <Text style={{ fontSize: 16, marginLeft: 4 }}>{restaurantName}</Text>
        </View>
        <Text style={{ fontSize: 14, color: '#555', marginHorizontal: 16, marginTop: 4 }}>
          {restaurantAddress}
        </Text>
        <View style={{ height: 1000 }}>
          <SingleLocationMapView
            latitude={restaurant.latitude}
            longitude={restaurant.longitude}
            pin_name={restaurantName}
            pin_description={restaurantAddress}
          />
        </View>
      </ImageHeaderScrollView>
    </>
  );
}
