import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';
import { useRef, useEffect } from 'react';

export default function ReflectionScreen() {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fade }]}>
      <Text style={styles.title}>📝 Reflection</Text>
      <TextInput
        placeholder="Write freely..."
        multiline
        style={styles.box}
      />
    </Animated.View>
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
    marginBottom: 12,
  },
  box: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    height: 200,
    fontFamily: 'Doodle',
    fontSize: 16,
  },
});
