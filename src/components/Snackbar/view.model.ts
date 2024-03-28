export type SnackbarType = 'error' | 'success' | 'default';

export interface SnackbarProps {
  text: string;
  type?: SnackbarType;
  visible?: boolean;
  onClose: () => void;
};
