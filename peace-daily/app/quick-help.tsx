import { ScrollView, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function QuickHelpScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🤍 You’re Not Alone</Text>

      <Text style={styles.text}>
        It’s okay to feel overwhelmed. Take a slow deep breath.
      </Text>

      <Text style={styles.section}>🧘 Immediate Coping Tips</Text>
      <Text>• Breathe in for 4 seconds, out for 6 seconds</Text>
      <Text>• Drink some water</Text>
      <Text>• Step away from screens for 5 minutes</Text>

      <Text style={styles.section}>📞 Reach Out</Text>
      <Text>• Talk to a trusted friend or family member</Text>
      <Text>• Mental Health Helpline (India): 9152987821</Text>

      <Text style={styles.section}>💬 Need to Talk?</Text>
      <Text>You can use the Personal AI Companion in the Wellness tab.</Text>

      <Button title="Go Back" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
  section: {
    marginTop: 16,
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
