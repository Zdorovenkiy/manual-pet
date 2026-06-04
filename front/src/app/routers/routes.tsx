import { NotFoundPage } from "@/pages/notFound";
import { MainPage } from "@/pages/main";
import { SignIn } from "@/pages/signIn";
import { SignUp } from "@/pages/signUp";
import type { TRouteEnumValues } from "./types";

export const ROUTES = {
    NOT_FOUND: {
      id: "notFound",
      name: "",
      path: "*",
      element: <NotFoundPage />,
      layout: "BASE"
    },
    MAIN: {
      id: "main",
      name: "Главная",
      path: "/",
      element: <MainPage />,
      layout: "BASE"
    },
    SIGN_IN: {
      id: "sign-in",
      name: "Авторизация",
      path: "/sign-in",
      element: <SignIn />,
      layout: "AUTH"
    },
    SIGN_UP: {
      id: "sign-up",
      name: "Регистрация",
      path: "/sign-up",
      element: <SignUp />,
      layout: "AUTH"
    },
} as const satisfies Record<string, TRouteEnumValues>;