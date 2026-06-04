import { ROUTES, type TRouteEnumKeys } from "@/app/routers";
import { useNavigate } from "react-router-dom";

export function useSiteNavigate() {
  const navigate = useNavigate();

  return function navigateHandler(path: TRouteEnumKeys) {
    navigate(ROUTES[path].path)
  }
}