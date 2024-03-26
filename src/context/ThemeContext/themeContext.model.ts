import { IColorsTheme } from "@/assets/themes/model";

export type ThemeType = 'light' | 'dark';

export interface ThemeContextModel {
  stringTheme: string;
  theme: IColorsTheme;
  onToggleTheme: () => void;
};

export class Theme {
  constructor(public theme: ThemeType) {
    this.theme = theme;
  }
};
