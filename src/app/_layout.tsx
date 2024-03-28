import { useContext, useEffect } from 'react';
import { Slot, useRouter } from 'expo-router';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { AuthContext, AuthContextProvider } from '@/context/AuthContext';
import { AsyncStorage, initDBStorageKey } from '@/utils/AsyncStorage';
import { Database, InitDB } from '@/api/database/db';

function Layout() {
  const router = useRouter();
  const { isLogged, firstOpen, onLogin } = useContext(AuthContext);

  useEffect(() => {
    if (isLogged) {
      return router.replace('/perfil');
    } else if (!isLogged && firstOpen) {
      return router.replace('/(public)');
    } else {
      return router.replace('/login');
    }
  }, [isLogged]);

  useEffect(() => {
    async function initSQLiteDB() {
      const result = await AsyncStorage.read(initDBStorageKey) as InitDB;

      if (!result || (result && !result.initDB)) {
        const database = new Database();
        await database.init();
        AsyncStorage.save(initDBStorageKey, {initDB: true});
      }
    }
    
    if (firstOpen) {
      initSQLiteDB();
    }

    onLogin('11111111111', 'teste111')
  }, []);

  return <Slot />;
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
