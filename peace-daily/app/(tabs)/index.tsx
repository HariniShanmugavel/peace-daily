import {
  ScrollView,
  Text,
  View,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const [stress, setStress] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [anxiety, setAnxiety] = useState(2);
  const [focus, setFocus] = useState(5);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <Text style={styles.heading}>🌸 Daily Mental Check-in</Text>
        <Text style={styles.subText}>How are you feeling today?</Text>

        <View style={styles.card}>
          {slider('😣 Stress', stress, setStress)}
          {slider('⚡ Energy', energy, setEnergy)}
          {slider('😰 Anxiety', anxiety, setAnxiety)}
          {slider('🎯 Focus', focus, setFocus)}
        </View>

        <Pressable
          style={[styles.button, { backgroundColor: '#a6dcef' }]}
          onPress={() => router.push('/checkin-result')}
        >
          <Text style={styles.buttonText}>Submit Check-in</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: '#eec9d2' }]}
          onPress={() => router.push('/quick-help')}
        >
          <Text style={styles.buttonText}>Quick Help 💗</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

function slider(label: string, value: number, setValue: (v: number) => void) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text>{label}: {value}</Text>
      <Slider
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={value}
        onValueChange={setValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#fff9f0',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
  },
  subText: {
    marginBottom: 20,
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 24,
  },
  button: {
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
  },
});
