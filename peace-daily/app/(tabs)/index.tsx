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
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  const [stress, setStress] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [anxiety, setAnxiety] = useState(2);
  const [focus, setFocus] = useState(5);

  // Animation
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
        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons name="spa" size={40} color="#f78fb3" />
          <Text style={styles.heading}>Daily Mental Check-in</Text>
        </View>
        <Text style={styles.subText}>How are you feeling today?</Text>

        {/* Card */}
        <View style={styles.card}>
          {renderSlider('😣 Stress', stress, setStress)}
          {renderSlider('⚡ Energy', energy, setEnergy)}
          {renderSlider('😰 Anxiety', anxiety, setAnxiety)}
          {renderSlider('🎯 Focus', focus, setFocus)}
        </View>

        {/* Buttons */}
        <Pressable
          style={[styles.button, { backgroundColor: '#a6dcef' }]}
          onPress={() => router.push('/checkin-result')}
        >
          <FontAwesome5
            name="clipboard-list"
            size={20}
            color="white"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText}>Submit Check-in</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: '#eec9d2' }]}
          onPress={() => router.push('/quick-help')}
        >
          <MaterialIcons
            name="favorite"
            size={20}
            color="white"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText}>Quick Help</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

/* ---------- Slider Component ---------- */
function renderSlider(
  label: string,
  value: number,
  setValue: (v: number) => void
) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.sliderLabel}>
        {label}: {value}
      </Text>
      <Slider
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={value}
        minimumTrackTintColor="#c1b7e2"
        maximumTrackTintColor="#ddd"
        thumbTintColor="#c1b7e2"
        onValueChange={setValue}
      />
    </View>
  );
}

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9f0',
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    marginLeft: 10,
    fontFamily: 'System',
  },
  subText: {
    fontSize: 15,
    marginBottom: 20,
    color: '#555',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 6,
  },
  button: {
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
