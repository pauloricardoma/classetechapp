import { Stack, Tabs } from 'expo-router';
import Entypoicons from '@expo/vector-icons/Entypo';

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home/index"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }}>
      <Tabs.Screen name="home/index" options={{
        title: 'Home',
        tabBarIcon: ({ color, size }) => {

          return <Entypoicons name="home" color={color} size={size} />
        }
      }} />
    </Tabs>
  );
};
