import React from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { categories } from '@/constants/Food';
import { useLanguage } from '@/contexts/LanguageContext';
import { strings } from '@/constants/i18n';

export default function SearchScreen() {
  const { language, toggleLanguage } = useLanguage();
  const t = strings[language];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>{t.searchTitle}</Text>
        <TouchableOpacity style={styles.langButton} onPress={toggleLanguage} activeOpacity={0.75}>
          <Text style={styles.langButtonText}>{language === 'en' ? '中文' : 'EN'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/category/${item.id}`)}
            activeOpacity={0.75}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.categoryName}>
              {language === 'en' ? item.name_en : item.name_zh}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  langButton: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
  },
  langButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  grid: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  emoji: {
    fontSize: 44,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});
