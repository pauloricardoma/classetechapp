import { AsyncStorage } from "@/utils/AsyncStorage";
import { Router } from "expo-router/build/types";

export interface AuthContextModel {
  firstOpen: boolean;
  isLogged: boolean;
  user: User | null;
  error: string;
  isLoading: boolean;
  onLogin: (cpf: string, password: string) => void;
  onSignin: (name: string, cpf: string, password: string) => void;
  onReset: (cpf: string, oldPassword: string, newPassword: string) => void;
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
    public name: string,
    public cpf: string,
    private password: string
  ) {
    this.name = name;
    this.cpf = cpf;
    this.password = password;
  }

  static async verify(
    cpf: string,
    verifyPassword: string
  ): Promise<VerifyResponse> {
    let savedUser = await AsyncStorage.read(cpf);

    if (savedUser instanceof User) {
      if (savedUser.password === verifyPassword) {
        return {
          verify: true,
          data: savedUser,
        }
      };
    }

    return {
      verify: false,
      data: null,
    }
  }

  static async reset(
    cpf: string,
    oldPassword: string,
    newPassword: string
  ): Promise<VerifyResponse> {
    let savedUser = await AsyncStorage.read(cpf);

    if (savedUser instanceof User) {
      if (savedUser.password === oldPassword) {
        const saveUser = new User(
          savedUser.name,
          savedUser.cpf,
          newPassword
        );
        const userStorage: UserStorage = { user: saveUser };
        await AsyncStorage.save(cpf, userStorage);

        return {
          verify: true,
          data: saveUser,
        }
      };
    }

    return {
      verify: false,
      data: null,
    }
  }
};

export interface VerifyResponse {
  verify: boolean;
  data: User | null;
};
