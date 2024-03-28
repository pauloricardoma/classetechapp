import { useContext, useMemo } from "react";
import { Text, View } from "react-native";
import { ThemeContext } from "@/context/ThemeContext";
import AntDicons from '@expo/vector-icons/AntDesign';
import { SnackbarProps } from "./view.model";
import { styles } from "./styles";

export default function Snackbar({
  text,
  type,
  visible,
  onClose,
}: SnackbarProps) {
  const { theme } = useContext(ThemeContext);

  const colors = useMemo(() => {
    if (type === 'error') {
      return {
        backgroundColor: theme.danger.danger,
        color: theme.danger.onDanger,
      }
    }

    if (type === 'success') {
      return {
        backgroundColor: theme.success.success,
        color: theme.success.onSuccess,
      }
    }

    return {
      backgroundColor: theme.secondary.secondary,
      color: theme.secondary.onSecondary,
    }
  }, [type])

  if (visible) {
    return (
      <View style={styles.container}>
        <View
          style={{
            ...styles.content,
            backgroundColor: colors.backgroundColor
          }}
        >
          <View style={styles.textContainer}>
            <Text style={{
              ...styles.text,
              color: colors.color
            }}>
              {text}
            </Text>
          </View>
          <AntDicons
            name="closecircleo"
            size={20}
            onPress={onClose}
            color={colors.color}
          />
        </View>
      </View>
    );
  }

  return null;
};
