import { Tabs } from 'expo-router';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6a5acd',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { backgroundColor: '#fff', paddingBottom: 4, height: 60 },
      }}
    >
      {/* Home / Check-in */}
      <Tabs.Screen
        name="index"   // your HomeScreen
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="spa" size={size} color={color} />
          ),
        }}
      />

      {/* Reflection / Journal */}
      <Tabs.Screen
        name="reflection"
        options={{
          title: 'Reflection',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="notebook" size={size} color={color} />
          ),
        }}
      />

      {/* Therapist / AI Buddy */}
      <Tabs.Screen
        name="therapist"
        options={{
          title: 'AI Buddy',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" size={size} color={color} />
          ),
        }}
      />

      {/* Insights / Stats */}
      <Tabs.Screen
        name="insights"
        options={{
          title: 'Insights',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
