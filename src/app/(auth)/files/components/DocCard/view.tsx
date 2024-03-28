import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { DocCardProps } from "./view.model";
import { styles } from "./styles";

export default function DocCard({ uri, fileName, theme }: DocCardProps) {
  const router = useRouter();

  function goTo() {
    router.navigate({ pathname: '/files/imagemodal', params: { uri } })
  }

  return (
    <TouchableOpacity
      onPress={goTo}
      style={{
        ...styles.container,
        backgroundColor: theme.surface.surfaceContainer
      }}>
      <View style={styles.textContainer}>
        <Text numberOfLines={2}>{fileName}</Text>
      </View>
      <Image source={{ uri }} height={100} width={100} />
    </TouchableOpacity>
  )
}