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
    surface: '#121212',
    onSurface: '#FFFFFF',
    surfaceContainer: '#383838',
    surfaceOutline: '#383838',
  },
  tertiary: {
    tertiary: ['#1212122F', '#121212'],
    onTertiary: '#FFFFFF',
  },
  opacity: '#3838382F',
} as IColorsTheme;
