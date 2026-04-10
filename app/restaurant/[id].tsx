import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { ImageHeaderScrollView } from 'react-native-image-header-scroll-view';
import Entypo from '@expo/vector-icons/Entypo';
import SingleLocationMapView from '@/components/SingleLocationMapView';
import { restaurants, menuItems } from '@/constants/Food';
import { useLanguage } from '@/contexts/LanguageContext';
import { strings } from '@/constants/i18n';

export function generateStaticParams() {
  return restaurants.map(r => ({ id: r.id.toString() }));
}

const TAG_COLORS: Record<string, string> = {
  'gluten-free': '#4caf50',
  vegan: '#2196f3',
};

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { language } = useLanguage();
  const t = strings[language];
  const restaurant = restaurants.find(r => r.id === Number(id));
  const items = menuItems.filter(m => m.restaurant_id === Number(id));

  if (!restaurant) return null;

  const restaurantName = language === 'en' ? restaurant.name_en : restaurant.name_zh;

  return (
    <>
      <Stack.Screen
        options={{
          title: restaurantName,
          headerBackTitleStyle: { fontSize: 0 },
        }}
      />
      <ImageHeaderScrollView
        maxHeight={260}
        minHeight={0}
        headerImage={restaurant.image_link}
        minOverlayOpacity={0}
        maxOverlayOpacity={0.65}
        overlayColor="black"
        disableHeaderGrow
      >
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.restaurantName}>
          {restaurantName}
        </Text>
        <View style={styles.addressRow}>
          <Entypo name="location" size={16} color="#f3ce45" />
          <Text style={styles.address}>{restaurant.address}</Text>
        </View>

        <View style={styles.mapContainer}>
          <SingleLocationMapView
            latitude={restaurant.latitude}
            longitude={restaurant.longitude}
            pin_name={restaurantName}
            pin_description={restaurant.address}
          />
        </View>

        <Text style={styles.menuTitle}>{t.menu}</Text>

        {items.map(item => (
          <View key={item.id} style={styles.menuItem}>
            <Text style={styles.itemName}>
              {language === 'en' ? item.name_en : item.name_zh}
            </Text>
            <Text style={styles.itemDescription}>
              {language === 'en' ? item.description_en : item.description_zh}
            </Text>
            <View style={styles.tagsRow}>
              {item.dietary_tags.map(tag => (
                <View
                  key={tag}
                  style={[styles.tag, { backgroundColor: TAG_COLORS[tag] ?? '#888' }]}
                >
                  <Text style={styles.tagText}>
                    {t.dietaryTags[tag] ?? tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ImageHeaderScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  restaurantName: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 16,
    marginHorizontal: 16,
    color: '#1a1a1a',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#555',
    marginLeft: 4,
    flexShrink: 1,
  },
  mapContainer: {
    height: 220,
    marginTop: 12,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
    color: '#1a1a1a',
  },
  menuItem: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 8,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '600',
  },
});
