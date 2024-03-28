import { useState, useEffect } from 'react';
import { Router } from 'expo-router/build/types';
import {
  AsyncStorage,
  authStorageKey,
  firstOpenStorageKey,
  userStorageKey
} from '@/utils/AsyncStorage';
import {
  AuthStorage,
  File,
  FirstStorage,
  User,
  UserStorage
} from './authContext.model';
import userService from '@/service/userService';

export function useAuth() {
  const [firstOpen, setFirstOpen] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function initalLocalAuth() {
      try {
        const response = await AsyncStorage.readMulti(
          [firstOpenStorageKey, authStorageKey]
        );
        if (response) {
          const { first } = response[firstOpenStorageKey] as FirstStorage;
          const { logged: isLogged } = response[firstOpenStorageKey] as AuthStorage;
          setFirstOpen(first);
          return setLogged(isLogged);
        }

        return setLogged(false);

      } catch (err) {
        return setLogged(false);
      }
    };

    initalLocalAuth();
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (error) {
      timeout = setTimeout(() => {
        setError('');
      }, 5000);

    }

    return () => {
      if (timeout) clearTimeout(timeout);
    }
  }, [error]);

  async function handleLogin(cpf: string, password: string) {
    setLoading(true);

    try {
      const user = await userService.login(cpf, password);

      setUser(user);
      setLogged(true);
      await AsyncStorage.save(authStorageKey, { logged: true });

    } catch (err: any) {
      setUser(null);
      setLogged(false);
      setError(err?.message);

    } finally {
      setLoading(false);
    }
  };

  async function handleSignin(cpf: string, email: string, name: string, password: string) {
    setLoading(true);

    try {
      const newUser = new User(cpf, email, name, password);

      const user = await userService.signin(newUser);

      setUser(user)
      setLogged(true);

      const authStorage: AuthStorage = { logged: true };
      const firstOpenStorage: FirstStorage = { first: true };
      const userStorage: UserStorage = { user: newUser };
      await AsyncStorage.saveMulti([
        [userStorageKey, userStorage],
        [authStorageKey, authStorage],
        [firstOpenStorageKey, firstOpenStorage],
      ]);

    } catch (err: any) {
      setUser(null);
      setLogged(false);
      setError(err?.message);

    } finally {
      setLoading(false);
    }
  };

  async function uploadImage(userId: number, uri: string, fileName: string) {
    setLoadingImage(true);

    try {
      const newFile = new File(uri, fileName);

      const file: File = await userService.upload(userId, newFile);

      if (user) {
        const newUser = { ...user };
        newUser.images = newUser.images?.length ? [...newUser.images, file] : [file];

        setUser(newUser);

        const authStorage: AuthStorage = { logged: true };
        const firstOpenStorage: FirstStorage = { first: true };
        const userStorage: UserStorage = { user: newUser };
        await AsyncStorage.saveMulti([
          [userStorageKey, userStorage],
          [authStorageKey, authStorage],
          [firstOpenStorageKey, firstOpenStorage],
        ]);
      }

    } catch (err: any) {
      setError(err?.message);

    } finally {
      setLoadingImage(false);
    }
  };

  async function handleLogout(router: Router) {
    setUser(null);
    setLogged(false);
    await AsyncStorage.deleteMulti([authStorageKey, userStorageKey]);
    router.replace('/(public)');
  };

  function clearError() {
    setError('');
  }

  return {
    firstOpen,
    logged,
    user,
    error,
    loading,
    handleLogin,
    handleSignin,
    handleLogout,
    uploadImage,
    clearError,
  };
};
