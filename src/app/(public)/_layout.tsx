import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { ThemeContext } from '@/context/ThemeContext';

export default function Layout() {
  const { stringTheme } = useContext(ThemeContext);

  const isLighter = stringTheme === 'light';

  return (
    <>
      <StatusBar style={isLighter ? 'dark' : 'light'} />
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login/index" options={{ title: 'Entrar' }} />
        <Stack.Screen name="signin/index" options={{ title: 'Cadastrar' }} />
      </Stack>
    </>
  );
};
