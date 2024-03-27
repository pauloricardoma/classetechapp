import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData
} from "react-native";

export interface TextInputProps {
  value?: string;
  placeholder?: string;
  type?: KeyboardTypeOptions;
  isPassword?: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  error?: string;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText: (value: string) => void;
};
