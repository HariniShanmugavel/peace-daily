import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="person" size={30} color="#fff" />
        <Text style={styles.title}>Profile</Text>
      </View>

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontFamily: 'Doodle',
    fontSize: 26,
    color: '#fff',
    marginLeft: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
});
