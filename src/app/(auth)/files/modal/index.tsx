import { useContext } from "react";
import { SafeAreaView, View } from "react-native";
import { useRouter } from "expo-router";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";
import Button from "@/components/Button/view";
import { getDocumentAsync } from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles";

export default function ModalFiles() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { user, onUploadImage } = useContext(AuthContext);

  async function openDocumentPicker() {
    const result = await getDocumentAsync();

    if (result.assets && user?.id) {
      const customName = `doc_${new Date().getTime().toString()}`;
      onUploadImage(
        user.id,
        result.assets[0].uri,
        result.assets[0]?.name || customName
      );
      goBack();
    }
  }

  async function openImagePicker() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets && user?.id) {
      const customName = `img_${new Date().getTime().toString()}`;
      onUploadImage(
        user.id,
        result.assets[0].uri,
        result.assets[0]?.fileName || customName
      );
      goBack();
    }
  }

  function goBack() {
    router.navigate('../');
  };

  return (
    <SafeAreaView style={{
      ...styles.container,
      backgroundColor: theme.surface.surface
    }}>
      <View style={styles.main}>
        <View style={styles.btnOpen}>
          <Button
            label="Abrir Arquivo"
            accessibilityLabel=""
            accessibilityHint=""
            onPress={openDocumentPicker}
          />
        </View>
        <View style={styles.btnOpen}>
          <Button
            label="Abrir Galeria"
            accessibilityLabel=""
            accessibilityHint=""
            onPress={openImagePicker}
          />
        </View>
        <View style={styles.btnBack}>
          <Button
            label="Voltar"
            accessibilityLabel=""
            accessibilityHint=""
            onPress={goBack}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}