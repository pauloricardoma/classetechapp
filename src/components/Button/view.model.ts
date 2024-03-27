export type ButtonType = 'contained' | 'text';

export interface ButtonProps {
  type?: ButtonType;
  label: string;
  loading?: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  onPress: () => void;
};
