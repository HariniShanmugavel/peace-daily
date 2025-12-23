import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function InsightsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="search" size={30} color="#6a5acd" />
        <Text style={styles.title}>Insights</Text>
      </View>

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontFamily: 'Doodle',
    fontSize: 26,
    marginLeft: 8,
  },
  card: {
    backgroundColor: '#eec9d2',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
});
