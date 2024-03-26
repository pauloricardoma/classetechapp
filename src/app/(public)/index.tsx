import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Link, Stack } from "expo-router";
import { styles } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Public() {
  const { stringTheme, theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{
      ...styles.container,
      backgroundColor: theme.surface.surface
    }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onToggleTheme}>
          <Text style={styles.btnHeaderToggleText}>
            {stringTheme === 'light' ? '🌚' : '🌞'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={{
          ...styles.mainText,
          color: theme.surface.onSurface
        }}>
          Seja Bem Vindo ao
        </Text>
        <Text style={{
          ...styles.mainText,
          color: theme.surface.onSurface
        }}>
          CADASTRE AQUI!
        </Text>
        <Text style={{
          ...styles.descriptionText,
          color: theme.surface.onSurface
        }}>
          Para propósitos de teste a 'Api' será desenvolvida dentro do App com SQLite, fora de uma realidade em produção...
        </Text>
        <Link href="/login" style={{
          ...styles.btnNext,
          backgroundColor: theme.secondary.secondary
        }}>
          <Text style={{
            ...styles.btnNextText,
            color: theme.secondary.onSecondary
          }}>
            Continuar
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  )
};
