import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerBackTitleVisible: false
      }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ title: 'Entrar' }} />
      <Stack.Screen name="signin/index" options={{ title: 'Cadastrar' }} />
      <Stack.Screen name="reset/index" options={{ title: 'Recuperar Senha' }} />
    </Stack>
  );
};
