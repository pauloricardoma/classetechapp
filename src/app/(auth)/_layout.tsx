import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'expo-router';
import { ThemeContext } from '@/context/ThemeContext';
import Entypoicons from '@expo/vector-icons/Entypo';

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

            return <Entypoicons name="home" color={color} size={size} />
          }
        }}
        />
        <Tabs.Screen 
        name="files/index" 
        options={{
          title: 'Arquivos',
          tabBarIcon: ({ color, size }) => {

            return <Entypoicons name="home" color={color} size={size} />
          }
        }}
        />
      </Tabs>
    </>
  );
};
