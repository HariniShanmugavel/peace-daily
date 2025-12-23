import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function TherapistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤖 Your AI Buddy</Text>

      <View style={styles.chatBubble}>
        <Text style={styles.aiText}>
          Hi 💗 I’m here to listen. What’s on your mind?
        </Text>
      </View>

      <TextInput
        placeholder="Type your feelings..."
        style={styles.input}
      />

      <Pressable style={styles.send}>
        <Text style={styles.sendText}>Send</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1b7e2',
    padding: 20,
  },
  title: {
    fontFamily: 'Doodle',
    fontSize: 24,
    marginBottom: 10,
  },
  chatBubble: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
  },
  aiText: {
    fontFamily: 'Doodle',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    fontFamily: 'Doodle',
  },
  send: {
    backgroundColor: '#a6dcef',
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
  },
  sendText: {
    textAlign: 'center',
    fontFamily: 'Doodle',
    fontSize: 16,
  },
});
