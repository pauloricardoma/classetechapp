import { useContext } from "react";
import { TextInput as ReactTextInput, Text } from "react-native";
import { ThemeContext } from "@/context/ThemeContext";
import { TextInputProps } from "./view.model";
import { styles } from "./styles";

export default function TextInput({
  value,
  placeholder,
  type,
  isPassword,
  accessibilityLabel,
  accessibilityHint,
  error,
  onBlur,
  onChangeText,
}: TextInputProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ReactTextInput
        value={value}
        placeholder={placeholder}
        keyboardType={type}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        secureTextEntry={isPassword}
        onBlur={onBlur}
        onChangeText={onChangeText}
        style={{
          ...styles.input,
          backgroundColor: theme.secondary.secondary,
          borderColor: theme.surface.surfaceOutline,
          color: theme.secondary.onSecondary
        }}
      />
      {error && (
        <Text style={{
          ...styles.errorText,
          color: theme.danger.danger
        }}>
          {error}
        </Text>
      )}
    </>
  );
};
