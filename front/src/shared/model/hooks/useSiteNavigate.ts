import { ROUTES, type routeType } from "@/app/routers";
import { useNavigate } from "react-router-dom";

export function useSiteNavigate() {
  const navigate = useNavigate();

  return function navigateHandler(path: routeType) {
    navigate(ROUTES[path].path)
  }
}