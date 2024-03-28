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
    handleLogout,
    uploadImage,
    clearError,
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
    onUploadImage: uploadImage,
    onClearError: clearError,
  }), [
    logged,
    user,
    error,
    loading,
    handleLogin,
    handleSignin,
    handleLogout,
    uploadImage,
    clearError,
  ]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
