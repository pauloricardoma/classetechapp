import { routes } from "./routes";
import { areUrlsIdentical, parseURL } from "./utils/parseURL"

export type MethodType = 'get' | 'post' | 'update' | 'delete'

export interface Request {
  method: MethodType;
  url: string;
  body?: object;
}

export const BASE_URL = 'http://local:8888'

class Server {
  async http({ method, url, body }: Request) {
    const { path, params } = parseURL(url)

    if (path.startsWith(BASE_URL)) {
      const postRoutes = routes.routeMap.get(method)

      const route = postRoutes?.find(route => {
        const matchURL = `${BASE_URL}${route.path}`
        return areUrlsIdentical(path, matchURL)
      })
  
      if (route) return await route.func({ params, body })
    }
  }
}

export const server = new Server()