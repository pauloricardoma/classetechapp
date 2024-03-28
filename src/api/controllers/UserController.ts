import { Database } from "../database/db";
import { UserDTO } from "../dto/user";
import { Response } from "../models/response";
import { User } from "../models/user";
import { UserRepository } from "../repositories/UserRepository";
import { RequestRoute } from "../routes";
import { Get } from "../usecases/users/get";
import { Create } from "../usecases/users/create";
import { Upload } from "../usecases/users/upload";
import { File } from "../models/file";

export class UserController {
  async index(request: RequestRoute) {
    const { body } = request

    const database = new Database();
    const userRepository = new UserRepository(database, UserDTO);
    
    try {
      const result = await new Get(body, userRepository).call();
      const response = new Response(200, true, result)
      return response;

    } catch (err: any) {
      const response = new Response(400, false, undefined, err)
      return response;
    }
  }

  async store(request: RequestRoute) {
    const { body } = request

    const database = new Database();
    const userRepository = new UserRepository(database, UserDTO);

    try {
      const result = await new Create(body, User, userRepository).call();
      const response = new Response(200, true, result)
      return response;

    } catch (err: any) {
      const response = new Response(400, false, undefined, err)
      return response;
    }
  }

  async upload(request: RequestRoute) {
    const { id, body } = request

    const database = new Database();
    const userRepository = new UserRepository(database, UserDTO);

    try {
      const result = await new Upload(body, File, userRepository, id).call();
      const response = new Response(200, true, result)
      return response;

    } catch (err: any) {
      const response = new Response(400, false, undefined, err)
      return response;
    }
  }
}