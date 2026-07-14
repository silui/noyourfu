import React from 'react';
import { FlatList, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, Stack, router, type Href } from 'expo-router';
import { ListItem } from '@rn-vui/themed';
import Entypo from '@expo/vector-icons/Entypo';
import { categories, restaurants } from '@/constants/Food';
import { useLanguage } from '@/contexts/LanguageContext';

export function generateStaticParams() {
  return categories.map(c => ({ id: c.id.toString() }));
}

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { language } = useLanguage();
  const categoryId = Number(id);
  const category = categories.find(c => c.id === categoryId);
  const categoryRestaurants = restaurants.filter(r => r.category_id === categoryId);

  const categoryName = category
    ? `${category.emoji} ${language === 'en' ? category.name_en : category.name_zh}`
    : '';

  return (
    <>
      <Stack.Screen
        options={{
          title: categoryName,
          headerBackTitleStyle: { fontSize: 0 },
        }}
      />
      <FlatList
        style={styles.list}
        data={categoryRestaurants}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => router.push(`/restaurant/${item.id}` as Href)}
            bottomDivider
          >
            <Image source={item.image_link} style={styles.thumbnail} />
            <ListItem.Content>
              <ListItem.Title style={styles.restaurantName}>
                {language === 'en' ? item.name_en : item.name_zh}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.address}>
                <Entypo name="location" size={14} color="#f3ce45" />
                {'  '}{language === 'en' ? item.address_en : item.address_zh}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: 72,
    height: 72,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
  },
  address: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});
