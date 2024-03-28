import HttpClient from "@/utils/Http";
import { File, User } from "@/context/AuthContext/authContext.model";

class UsersService {
  httpClient: HttpClient
  constructor() {
    this.httpClient = new HttpClient('http://local:8888');
  }

  async signin(body: User) {
    return await this.httpClient.post('/user/signin', body);
  }

  async login(cpf: string, password: string) {
    return await this.httpClient.post('/user/login', { cpf, password });
  }

  async upload(userId: number, body: File) {
    return await this.httpClient.post(`/user/upload/${userId}`, body);
  }
}

export default new UsersService();
