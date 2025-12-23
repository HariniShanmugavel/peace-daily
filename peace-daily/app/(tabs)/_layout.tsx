import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: 'Peace-Daily',   // ✅ your header text
        headerStyle: {
          backgroundColor: '#fff9f0',
        },
        headerTitleStyle: {
          fontFamily: 'Doodle',
          fontSize: 22,
        },
        headerShadowVisible: false,

        tabBarStyle: {
          backgroundColor: '#fff9f0',
          height: 64,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontFamily: 'Doodle',
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="reflection" options={{ title: 'Reflect' }} />
      <Tabs.Screen name="wellness" options={{ title: 'therapist' }} />
      <Tabs.Screen name="insights" options={{ title: 'Insights' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
