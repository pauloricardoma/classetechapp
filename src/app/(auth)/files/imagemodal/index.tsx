import { useContext } from "react";
import { Dimensions, Image, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ThemeContext } from "@/context/ThemeContext";
import { styles } from "./styles";

const {width, height} = Dimensions.get('window');

export default function ModalFiles() {
  const params = useLocalSearchParams();
  const { uri } = params;
  
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.surface.surface
    }}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: uri as string }}
          width={width}
          height={height}
        />
      </View>
    </View>
  )
}