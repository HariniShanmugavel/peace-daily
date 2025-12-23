import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌼 Profile</Text>

      <View style={styles.card}>
        <Text>Name: User</Text>
        <Text>Daily Streak: 4 🔥</Text>
        <Text>Preferred Mood: Calm</Text>
      </View>

      <View style={styles.card}>
        <Text>🎨 Theme: Pastel</Text>
        <Text>🔔 Reminders: On</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6dcef',
    padding: 20,
  },
  title: {
    fontFamily: 'Doodle',
    fontSize: 26,
    marginBottom: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
});
