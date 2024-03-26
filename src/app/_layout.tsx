import { useContext, useEffect } from 'react';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { Slot, useRouter } from 'expo-router';
import { AuthContext, AuthContextProvider } from '@/context/AuthContext';

function Layout() {
  const router = useRouter();
  const {isLogged, firstOpen} = useContext(AuthContext);

  useEffect(() => {
    if (isLogged) {
      return router.replace('/home');
    } else if (!isLogged && firstOpen) {
      return router.replace('/(public)');
    } else {
      return router.replace('/login');
    }
  }, []);

  return (
    <Slot />
  );
};

export default function RootLayout() {

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout />
      </AuthContextProvider>
    </ThemeContextProvider>
  )
};
