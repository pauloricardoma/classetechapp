import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { styles } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Button from "@/components/Button/view";

export default function Public() {
  const router = useRouter();
  const { stringTheme, theme, onToggleTheme } = useContext(ThemeContext);

  function goTo(path: string) {
    router.replace(path);
  };

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
          CADASTRAAQUI!
        </Text>
        <Text style={{
          ...styles.descriptionText,
          color: theme.surface.onSurface
        }}>
          Para propósitos de teste a 'Api' será desenvolvida dentro do App com SQLite, fora de uma realidade em produção... :D
        </Text>
        <Text style={{
          ...styles.descriptionText,
          color: theme.surface.onSurface
        }}>
          {"Poderia ter ficado bem melhor em todas as partes, mas essa semana foi meio corrida... :'("}
        </Text>
        <Text style={{
          ...styles.descriptionText,
          color: theme.surface.onSurface
        }}>
          Seria bom ver todo o código que é até mais interessante que o app funcionando em si... :P
        </Text>
        <View style={styles.btnNext}>
          <Button
            label="Continuar"
            onPress={() => goTo('/login')}
            accessibilityLabel="Botão navegar autenticar"
            accessibilityHint="Botão para navegar para a tela de Autenticação"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
