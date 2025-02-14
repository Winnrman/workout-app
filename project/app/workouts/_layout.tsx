import { Stack } from 'expo-router';

export default function WorkoutsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1a1b1e' },
        headerTintColor: '#fff',
        // headerShown: false, // Hides the header here
      }}>
      <Stack.Screen
        name="upper-body"
        options={{
          title: 'Upper Body Workout',
          presentation: 'modal',
          tabBarStyle: { display: 'none' }, // Hides the tab bar here
        }}
      />
      <Stack.Screen
        name="custom"
        options={{
          title: 'Custom Workout',
          presentation: 'modal',
          tabBarStyle: { display: 'none' }, // Hides the tab bar here
        }}
      />
      <Stack.Screen
        name="new-workout"
        options={{
          title: 'New Workout',
          presentation: 'modal',
          tabBarStyle: { display: 'none' }, // Hides the tab bar here
          headerShown: false, // Hides the header here
        }}
      />
    </Stack>
  );
}
