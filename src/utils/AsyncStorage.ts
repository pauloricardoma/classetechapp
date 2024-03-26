import useAsyncStorage from "@react-native-async-storage/async-storage";

export const themeStorageKey = 'CLASSETECH_THEME_STORAGE_KEY';
export const authStorageKey = 'CLASSETECH_AUTH_STORAGE_KEY';
export const firstOpenStorageKey = 'CLASSETECH_FIRST_OPEN_STORAGE_KEY';

export class AsyncStorage {
  static async read(
    key: string,
    error?: (value: unknown) => void
  ): Promise<object | null> {
    try {
      const value = await useAsyncStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return null;
    } catch (err) {
      if (error) error(err);
      return null;
    }
  };

  static async readMulti(
    keys: string[],
    error?: (value: unknown) => void
  ): Promise<Record<string, object> | null> {
    try {
      const values = await useAsyncStorage.multiGet(keys);
      if (values) {
        const response: Record<string, object> = {};

        for (const [key, value] of values) {
          if (value) {
            response[key] = JSON.parse(value);
          }
        }

        return response;
      }
      return null;
    } catch (err) {
      if (error) error(err);
      return null;
    }
  };

  static async save(
    key: string, value: object,
    error?: (value: unknown) => void
  ): Promise<boolean> {
    try {
      await useAsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      if (error) error(err);
      return false;
    }
  };

  static async saveMulti(
    values: [string, object][],
    error?: (value: unknown) => void
  ): Promise<boolean> {
    try {
      const request: [string, string][] = [];
      values.forEach(([key, value]) => {
        request.push([key, JSON.stringify(value)]);
      });
      await useAsyncStorage.multiSet(request);
      return true;
    } catch (err) {
      if (error) error(err);
      return false;
    }
  };

  static async delete(
    key: string,
    error?: (value: unknown) => void
  ): Promise<boolean> {
    try {
      await useAsyncStorage.removeItem(key);
      return true;
    } catch (err) {
      if (error) error(err);
      return false;
    }
  };

  static async deleteMulti(
    keys: string[],
    error?: (value: unknown) => void
  ): Promise<boolean> {
    try {
      await useAsyncStorage.multiRemove(keys);
      return true;
    } catch (err) {
      if (error) error(err);
      return false;
    }
  };
}
