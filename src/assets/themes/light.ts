import { IColorsTheme } from "./model";
import { common } from "./common";

export default {
  ...common,
  secondary: {
    secondary: '#EAEDF0',
    onSecondary: '#324150',
    onSecondaryVariant: '#8697A8',
  },
  surface: {
    surface: '#FFFFFF',
    surfaceContainer: '#F7F7F7',
    surfaceOutline: '#EAEDF0',
    onSurface: '#324150',
    onSurfaceVariant: '#8697A8',
    onSurfacePlaceholder: '#BEC2C6',
  },
  opacity: '#1212125F',
} as IColorsTheme;
