import { IColorsTheme } from "./model";
import { common } from "./common";

export default {
  ...common,
  secondary: {
    secondary: '#383838',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#FFFFFF',
    secondaryVariant: '#121212',
  },
  surface: {
    surface: '#FFFFFF',
    onSurface: '#121212',
    surfaceContainer: '#E3E3E3',
    surfaceOutline: '#383838',
  },
  tertiary: {
    tertiary: ['#FFFFFF', '#00E1D42F', '#00E1D4'],
    onTertiary: '#121212',
  },
  opacity: '#1212125F',
} as IColorsTheme;
