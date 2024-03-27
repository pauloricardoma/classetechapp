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
    surface: '#1E1E1E',
    surfaceContainer: '#121212',
    surfaceOutline: '#383838',
    onSurface: '#FFFFFF',
    onSurfaceVariant: '#C3C3C3',
    onSurfacePlaceholder: '#898989',
  },
  opacity: '#3838382F',
} as IColorsTheme;
