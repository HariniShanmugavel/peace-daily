import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function CheckinResultScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="check-circle" size={36} color="#6a5acd" />
        <Text style={styles.title}>Check-in Submitted</Text>
      </View>

      <Text style={styles.text}>
        Thank you for completing your daily mental health check-in.
      </Text>

      {/* Metrics Card */}
      <View style={styles.card}>
        <Text style={styles.metric}>📊 Stress: Moderate</Text>
        <Text style={styles.metric}>⚡ Energy: Average</Text>
        <Text style={styles.metric}>😰 Anxiety: Low</Text>
        <Text style={styles.metric}>🎯 Focus: Good</Text>
      </View>

      {/* Insight Card */}
      <View style={styles.insightCard}>
        <Text style={styles.insightText}>
          💡 Insight: Taking short breaks today may help reduce stress.
        </Text>
      </View>

      {/* Go Home Button */}
      <Pressable style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9f0', // soft pastel background
    padding: 20,
    justifyContent: 'center',
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
    marginLeft: 10,
    color: '#6a5acd',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    color: '#555',
  },
  card: {
    backgroundColor: '#c1b7e2', // pastel card
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  metric: {
    fontSize: 16,
    marginBottom: 6,
  },
  insightCard: {
    backgroundColor: '#eec9d2', // pastel pink insight card
    borderRadius: 18,
    padding: 16,
    marginBottom: 24,
  },
  insightText: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6a5acd',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
