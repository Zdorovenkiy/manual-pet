import { ROUTES, type TRouteEnumKeys } from "@/app/routers";
import { useNavigate } from "react-router-dom";

export function useSiteNavigate() {
  const navigate = useNavigate();

  return function navigateHandler(path: TRouteEnumKeys, id?: number) {
    const route = ROUTES[path].path.includes(':id') ? 
    ROUTES[path].path.replace(':id', String(id)) : 
    ROUTES[path].path;

    navigate(route)
  }
}