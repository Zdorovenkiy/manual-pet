import type { JSX } from "react";
import type { ROUTES } from "./routes"
import type { TLayoutEnumKey } from "../layout";
import type { RouteObject } from "react-router-dom";

export type TRouteEnumKeys = keyof typeof ROUTES;

export type TRouteEnumValues = RouteObject & {
  id: string,
  name: string,
  path: string,
  element: JSX.Element,
  layout: TLayoutEnumKey
}

export type IRouteEnum = {
  [key in TRouteEnumKeys]: TRouteEnumValues;
};





