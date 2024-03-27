import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { ThemeContext } from "@/context/ThemeContext";
import Button from "@/components/Button/view";

export default function Files() {
  const router = useRouter();
  const { onLogout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{
      ...styles.container,
      backgroundColor: theme.surface.surface
    }}>
      <View style={styles.main}>
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