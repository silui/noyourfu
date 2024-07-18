import {  StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text adjustsFontSizeToFit={true} style={{fontSize: 30, textAlign: 'center', fontFamily: "HoeflerText-Black"}}  >
        This application is a showcase of how people could use a cell phone apps to find gluten-free foods.
      </Text>
      <Text/>
      <Text adjustsFontSizeToFit={true} style={{fontSize: 30, textAlign: 'center'}}  >
        By Edward and Summer 
      </Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
