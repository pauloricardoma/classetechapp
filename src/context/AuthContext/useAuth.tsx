import { useState, useEffect } from 'react';
import { AsyncStorage, authStorageKey, firstOpenStorageKey } from '@/utils/AsyncStorage';
import { AuthStorage, FirstStorage, User, UserStorage } from './authContext.model';
import { Router } from 'expo-router/build/types';

export function useAuth() {
  const [firstOpen, setFirstOpen] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
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
      const verify = await User.verify(cpf, password);

      if (verify.verify) {
        setUser(verify.data);
        setLogged(true);
        await AsyncStorage.save(authStorageKey, { logged: true });

      } else {
        setUser(null);
        setLogged(false);
        setError('Senha incorreta ou usuário não existe!');
      }

    } catch {
      setUser(null);
      setLogged(false);
      setError('Erro ao tentar logar!');

    } finally {
      setLoading(false);
    }
  };

  async function handleSignin(name: string, cpf: string, password: string) {
    setLoading(true);

    try {
      const newUser = new User(name, cpf, password);

      const existUser = await AsyncStorage.read(cpf);
      if (existUser) {
        setUser(null);
        setLogged(false);
        setError('CPF deve ser único!');

      } else {
        const authStorage: AuthStorage = { logged: true };
        const firstOpenStorage: FirstStorage = { first: true };
        const userStorage: UserStorage = { user: newUser };
        await AsyncStorage.saveMulti([
          [cpf, userStorage],
          [authStorageKey, authStorage],
          [firstOpenStorageKey, firstOpenStorage],
        ]);
      }

    } catch {
      setUser(null);
      setLogged(false);
      setError('Erro ao criar conta!');

    } finally {
      setLoading(false);
    }
  };

  async function handleReset(
    cpf: string,
    oldPassword: string,
    newPassword: string
  ) {
    setLoading(true);

    try {
      const verify = await User.reset(cpf, oldPassword, newPassword);

      if (verify.verify) {
        setUser(verify.data);
        setLogged(true);
        await AsyncStorage.save(authStorageKey, { logged: true });

      } else {
        setUser(null);
        setLogged(false);
        setError('Senha incorreta ou usuário não existe!');
      }

    } catch {
      setUser(null);
      setLogged(false);
      setError('Erro ao tentar logar!');

    } finally {
      setLoading(false);
    }
  };

  async function handleLogout(router: Router) {
    setUser(null);
    setLogged(false);
    await AsyncStorage.delete(authStorageKey);
    router.replace('/(public)');
  };

  return {
    firstOpen,
    logged,
    user,
    error,
    loading,
    handleLogin,
    handleSignin,
    handleReset,
    handleLogout
  };
};
