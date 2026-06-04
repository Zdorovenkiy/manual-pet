import { ROUTES } from './routes';
import type { IRouteEnum } from './types';

export const routeConfig = Object.fromEntries(
  Object.entries(ROUTES).map(([key, value]) => {
    return [
      key,
      {
        id: value.id,
        path: value.path,
        element: value.element,
        layout: value.layout,
      }
    ]
  })
) as IRouteEnum

console.log("routeConfig", routeConfig);
