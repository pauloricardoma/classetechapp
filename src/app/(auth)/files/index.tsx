import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { ThemeContext } from "@/context/ThemeContext";
import Button from "@/components/Button/view";
import DocCard from "./components/DocCard/view";

export default function Files() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  function goTo(path: string) {
    router.navigate(path);
  };

  return (
    <SafeAreaView style={{
      ...styles.container,
      backgroundColor: theme.surface.surface
    }}>
      <View style={styles.main}>
        {user?.images && user.images.length > 0 && (
          <FlatList
            data={user.images}
            renderItem={({ item }) => (
              <DocCard uri={item.uri} fileName={item.file_name} theme={theme} />
            )}
            style={{flexWrap:'wrap'}}
          />
        )}
        <View style={styles.btnContainerContained}>
          <Button
            label="Carregar Arquivos"
            accessibilityLabel=""
            accessibilityHint=""
            onPress={() => goTo('/files/modal')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
