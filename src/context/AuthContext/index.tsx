import { ReactNode, createContext, useMemo } from 'react';
import { AuthContextModel } from './authContext.model';
import { useAuth } from './useAuth';

export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel,
);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const {
    logged,
    firstOpen,
    user,
    error,
    loading,
    handleLogin,
    handleSignin,
    handleLogout
  } = useAuth();

  const authContextValue: AuthContextModel = useMemo(() => ({
    isLogged: logged,
    firstOpen,
    user,
    error,
    isLoading: loading,
    onLogin: handleLogin,
    onSignin: handleSignin,
    onLogout: handleLogout,
  }), [
    logged,
    user,
    error,
    loading,
    handleLogin,
    handleSignin,
    handleLogout
  ]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
