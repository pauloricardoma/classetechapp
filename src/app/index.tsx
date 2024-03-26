import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

export default function StartPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.surface.surface
    }}>
      <ActivityIndicator size="large" color={theme.surface.onSurface} />
    </View>
  );
};
