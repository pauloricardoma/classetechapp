import { useState, useMemo, useEffect, ReactNode, createContext } from 'react';
import { AsyncStorage, themeStorageKey } from '@/utils/AsyncStorage';
import { IColorsTheme } from '@/assets/themes/model';
import { Theme, ThemeContextModel, ThemeType } from './themeContext.model';
import themes from '@/assets/themes';

export const ThemeContext = createContext<ThemeContextModel>(
  {} as ThemeContextModel,
);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const currentTheme: IColorsTheme = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);

  useEffect(() => {
    async function initalLocalTheme() {
      let localTheme: ThemeType = 'light';
      try {
        const result = await AsyncStorage.read(themeStorageKey);
        if (result) {
          const { theme: storageTheme } = result as Theme;
          localTheme = storageTheme;
        }
        setTheme(localTheme);
      } catch (err) {
        console.log(err);
      }
      return localTheme;
    }

    initalLocalTheme();
  }, []);

  useEffect(() => {
    async function saveLocalTheme() {
      const newTheme = new Theme(theme);
      await AsyncStorage.save(themeStorageKey, newTheme);
    }

    if (theme) {
      saveLocalTheme();
    }
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        stringTheme: theme,
        theme: currentTheme,
        onToggleTheme: handleToggleTheme
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
