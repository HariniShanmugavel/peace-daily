import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CheckinResultScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ Check-in Submitted</Text>

      <Text style={styles.text}>
        Thank you for completing your daily mental health check-in.
      </Text>

      <Button title="Go to Home" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  text: { textAlign: 'center', marginVertical: 16 },
});
