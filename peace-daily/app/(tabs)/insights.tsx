import { View, Text, StyleSheet } from 'react-native';

export default function InsightsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Insights</Text>

      <View style={styles.card}>
        <Text>🌿 Wellness Tip</Text>
        <Text>Take short breaks today.</Text>
      </View>

      <View style={styles.card}>
        <Text>⚡ Trigger Noted</Text>
        <Text>High workload → Stress increase</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9f0',
    padding: 20,
  },
  title: {
    fontFamily: 'Doodle',
    fontSize: 26,
    marginBottom: 14,
  },
  card: {
    backgroundColor: '#eec9d2',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
});
