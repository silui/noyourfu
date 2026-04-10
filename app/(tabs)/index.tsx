import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from '@/contexts/LanguageContext';
import { strings } from '@/constants/i18n';

export default function HomeScreen() {
  const { language } = useLanguage();
  const t = strings[language];

  return (
    <SafeAreaView style={styles.container}>
      <Text adjustsFontSizeToFit style={styles.description}>
        {t.homeDescription}
      </Text>
      <Text />
      <Text adjustsFontSizeToFit style={styles.credit}>
        {t.homeCredit}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  description: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'HoeflerText-Black',
  },
  credit: {
    fontSize: 30,
    textAlign: 'center',
  },
});
