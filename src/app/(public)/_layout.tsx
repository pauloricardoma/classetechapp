import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { ThemeContext } from '@/context/ThemeContext';
import Snackbar from '@/components/Snackbar/view';
import { AuthContext } from '@/context/AuthContext';

export default function Layout() {
  const { stringTheme } = useContext(ThemeContext);
  const { error, onClearError } = useContext(AuthContext);

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
      <Snackbar visible={!!error} type="error" text={error} onClose={onClearError} />
    </>
  );
};
