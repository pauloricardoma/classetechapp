import { useContext, useMemo } from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { ThemeContext } from "@/context/ThemeContext";
import { ButtonProps } from "./view.model";
import { styles } from "./styles";

export default function Button({
  type,
  label,
  loading,
  accessibilityLabel,
  accessibilityHint,
  onPress,
}: ButtonProps) {
  const { theme } = useContext(ThemeContext);

  const typeStyles = useMemo(() => {
    if (type === 'text') {
      return styles.btnText;
    }

    return styles.btnContained;
  }, [type]);

  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      style={{
        ...typeStyles,
        backgroundColor: type === 'text'
          ? undefined
          : theme.secondary.secondary
      }}
    >
      {type === 'contained' && loading && (
        <ActivityIndicator
          animating={true}
          color={theme.secondary.onSecondary}
        />
      )}
      {!loading && (
        <Text style={{
          ...styles.text,
          color: type === 'text'
            ? theme.information.information
            : theme.secondary.onSecondary
        }}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
