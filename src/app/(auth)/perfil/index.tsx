import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { ThemeContext } from "@/context/ThemeContext";
import Button from "@/components/Button/view";

export default function Perfil() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { user, onLogout } = useContext(AuthContext);

  return (
    <SafeAreaView style={{
      ...styles.container,
      backgroundColor: theme.surface.surface
    }}>
      <View style={styles.main}>
        <View style={styles.infoContainer}>
          <Text style={{
            ...styles.title,
            borderColor: theme.surface.onSurface
          }}>
            CPF:
          </Text>
          <View style={{
            ...styles.infoContent,
            borderColor: theme.surface.surfaceOutline
          }}>
            <Text style={{
              ...styles.titleValue,
              borderColor: theme.surface.onSurface
            }}>
              {user?.cpf || '--------'}
            </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{
            ...styles.title,
            borderColor: theme.surface.onSurface
          }}>
            Nome:
          </Text>
          <View style={{
            ...styles.infoContent,
            borderColor: theme.surface.surfaceOutline
          }}>
            <Text style={{
              ...styles.titleValue,
              borderColor: theme.surface.onSurface
            }}>
              {user?.name || '--------'}
            </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{
            ...styles.title,
            borderColor: theme.surface.onSurface
          }}>
            E-mail:
          </Text>
          <View style={{
            ...styles.infoContent,
            borderColor: theme.surface.surfaceOutline
          }}>
            <Text style={{
              ...styles.titleValue,
              borderColor: theme.surface.onSurface
            }}>
              {user?.email || '--------'}
            </Text>
          </View>
        </View>
        <View style={styles.btnContainerContained}>
          <Button
            label="Sair"
            accessibilityLabel=""
            accessibilityHint=""
            onPress={() => onLogout(router)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}