import { Link, Stack, useRouter } from 'expo-router'; // Step 1: Import useRouter
import { StyleSheet, Button } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  const router = useRouter(); // Use the useRouter hook to get the router object

  // Step 2: Create a function to redirect to the home page
  const redirectToHome = () => {
    router.navigate('/home'); // Use the navigate method to navigate to the home page

  };

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
        {/* Step 3: Add a button to trigger the redirect */}
        <Button title="Redirect to Home" onPress={redirectToHome} />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});