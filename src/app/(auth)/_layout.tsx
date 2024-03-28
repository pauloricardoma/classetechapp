import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'expo-router';
import { ThemeContext } from '@/context/ThemeContext';
import Materialicons from '@expo/vector-icons/MaterialIcons';
import Awesomeicons from '@expo/vector-icons/FontAwesome';

export default function Layout() {
  const { stringTheme, theme } = useContext(ThemeContext);
  
  const isLighter = stringTheme === 'light';

  return (
    <>
      <StatusBar style={isLighter ? 'dark' : 'light'} />
      <Tabs
        initialRouteName="perfil/index"
        screenOptions={{
          headerShown: false
        }}>
        <Tabs.Screen 
        name="perfil/index" 
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => {

            return <Materialicons name="person" color={color} size={size} />
          }
        }}
        />
        <Tabs.Screen 
        name="files" 
        options={{
          title: 'Arquivos',
          tabBarIcon: ({ color, size }) => {

            return <Awesomeicons name="files-o" color={color} size={size} />
          }
        }}
        />
      </Tabs>
    </>
  );
};
