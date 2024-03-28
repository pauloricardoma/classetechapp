import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="modal/index" options={{ presentation: 'modal' }} />
      <Stack.Screen name="imagemodal/index" options={{ presentation: 'modal' }} />
    </Stack>
  );
};
