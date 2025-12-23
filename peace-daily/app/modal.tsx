import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Mental Health Help</Text>

      <Text style={styles.text}>
        Take a deep breath. You are not alone.
      </Text>

      <Text style={styles.text}>
        Talk to someone you trust.
      </Text>

      <Text style={styles.help}>
        Emergency Helpline (India): 9152987821
      </Text>

      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  help: {
    textAlign: 'center',
    marginVertical: 12,
    fontWeight: 'bold',
    color: 'red',
  },
});
