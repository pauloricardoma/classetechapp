export interface IDefaultTheme {
  danger: {
    danger: string;
    onDanger: string;
    dangerPressed: string;
    dangerOutline: string;
    dangerContainer: string;
  };
  success: {
    success: string;
    onSuccess: string;
    successPressed: string;
    successOutline: string;
    successContainer: string;
  };
  warning: {
    warning: string;
    onWarning: string;
    warningPressed: string;
    warningOutline: string;
    warningContainer: string;
  };
  information: {
    information: string;
    onInformation: string;
    informationPressed: string;
    informationOutline: string;
    informationContainer: string;
  };
};

export interface IColorsTheme extends IDefaultTheme {
  secondary: {
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    secondaryVariant: string;
  };
  surface: {
    surface: string;
    onSurface: string;
    surfaceContainer: string;
    surfaceOutline: string;
  };
  tertiary: {
    tertiary: string[];
    onTertiary: string;
  };
  opacity: string;
};
