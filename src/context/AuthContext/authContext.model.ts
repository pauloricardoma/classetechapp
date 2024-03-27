import { Router } from "expo-router/build/types";

export interface AuthContextModel {
  firstOpen: boolean;
  isLogged: boolean;
  user: User | null;
  error: string;
  isLoading: boolean;
  onLogin: (cpf: string, password: string) => void;
  onSignin: (cpf: string, email: string, name: string, password: string) => void;
  onLogout: (router: Router) => void;
};

export interface UserStorage {
  user: User;
};

export interface AuthStorage {
  logged: boolean;
};

export interface FirstStorage {
  first: boolean;
};

export class User {
  constructor(
    public cpf: string,
    public email: string,
    public name: string,
    public password: string
  ) {
    this.cpf = cpf;
    this.email = email;
    this.name = name;
    this.password = password;
  }
};
