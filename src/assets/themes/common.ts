import { IDefaultTheme } from "./model";

export const common = {
  danger: {
    danger: '#E2574C',
    onDanger: '#FFFFFF',
    dangerPressed: '#8B0000',
    dangerOutline: '#B22222',
    dangerContainer: '#E2574C29',
  },
  success: {
    success: '#00FF7F',
    onSuccess: '#FFFFFF',
    successPressed: '#006400',
    successOutline: '#32CD32',
    successContainer: '#09B66D29',
  },
  warning: {
    warning: '#FDBF5E',
    onWarning: '#FFFFFF',
    warningPressed: '#FF8C00',
    warningOutline: '#FFA500',
    warningContainer: '#FDBF5E29',
  },
  information: {
    information: '#1E90FF',
    onInformation: '#FFFFFF',
    informationPressed: '#00008B',
    informationOutline: '#00BFFF',
    informationContainer: '#0081FF29',
  },
} as IDefaultTheme;
