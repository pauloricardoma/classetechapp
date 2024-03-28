import { UserController } from "../controllers/UserController";
import { MethodType } from "../server"

export const MethodTypes: MethodType[] = ['get', 'post', 'update', 'delete']

export interface RequestRoute {
  id?: number;
  params?: Record<string, string>;
  body?: object;
}

interface RouteMap {
  path: string;
  func: (request: RequestRoute) => Promise<any>;
}

class Route {
  routeMap = new Map<MethodType, RouteMap[]>

  constructor() {
    this.routeMap = new Map()
    for (const key of MethodTypes) {
      this.routeMap.set(key, [])
    }
  }

  addRoute(method: MethodType, route: RouteMap) {
    const newRoute = this.routeMap.get(method) as RouteMap[]
    newRoute.push(route)
    this.routeMap.set(method, newRoute)
  }
}

export const routes = new Route()

// /users
const userController = new UserController()
routes.addRoute('post', { path: '/user/signin', func: userController.store })
routes.addRoute('post', { path: '/user/login', func: userController.index })
routes.addRoute('post', { path: '/user/upload/{id}', func: userController.upload })