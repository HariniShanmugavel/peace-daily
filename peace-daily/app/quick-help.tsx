import { ScrollView, Text, View, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function QuickHelpScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="favorite" size={36} color="#eec9d2" />
        <Text style={styles.title}>You’re Not Alone</Text>
      </View>

      <Text style={styles.text}>
        It’s okay to feel overwhelmed. Take a slow deep breath.
      </Text>

      {/* Coping Tips */}
      <View style={styles.card}>
        <Text style={styles.section}>🧘 Immediate Coping Tips</Text>
        <Text style={styles.item}>• Breathe in for 4 seconds, out for 6 seconds</Text>
        <Text style={styles.item}>• Drink some water</Text>
        <Text style={styles.item}>• Step away from screens for 5 minutes</Text>
      </View>

      {/* Reach Out */}
      <View style={styles.card}>
        <Text style={styles.section}>📞 Reach Out</Text>
        <Text style={styles.item}>• Talk to a trusted friend or family member</Text>
        <Text style={styles.item}>• Mental Health Helpline (India): 9152987821</Text>
      </View>

      {/* AI Companion */}
      <View style={styles.card}>
        <Text style={styles.section}>💬 Need to Talk?</Text>
        <Text style={styles.item}>
          You can use the Personal AI Companion in the Wellness tab.
        </Text>
      </View>

      {/* Go Back Button */}
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff9f0', // pastel background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginLeft: 8,
    color: '#eec9d2',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    color: '#555',
  },
  card: {
    backgroundColor: '#c1b7e2', // pastel purple card
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  section: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#6a5acd',
  },
  item: {
    fontSize: 15,
    marginBottom: 4,
    color: '#333',
  },
  button: {
    backgroundColor: '#6a5acd',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
