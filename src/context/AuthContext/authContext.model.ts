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
  onUploadImage: (userId: number, uri: string, fileName: string) => void;
  onClearError: () => void;
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
    public password: string,
    public id?: number,
    public images?: File[],
  ) {
    this.id = id;
    this.cpf = cpf;
    this.email = email;
    this.name = name;
    this.password = password;
    this.images = images;
  }
};

export class File {
  constructor(
    public uri: string,
    public file_name: string,
  ) {
    this.uri = uri;
    this.file_name = file_name;
  }
};
