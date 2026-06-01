import { MainPage } from '@/pages/main';
import { NotFoundPage } from '@/pages/notFound';
import { SignIn } from '@/pages/signIn';
import { SignUp } from '@/pages/signUp';
import type { RouteObject } from 'react-router-dom';

export const ROUTES = {
    NOT_FOUND: {
      key: "notFound",
      name: "",
      path: "*",
      element: <NotFoundPage />,
    },
    MAIN: {
      key: "main",
      name: "Главная",
      path: "/",
      element: <MainPage />,
    },
    SIGN_IN: {
      key: "sign-in",
      name: "Авторизация",
      path: "/sign-in",
      element: <SignIn />,
    },
    SIGN_UP: {
      key: "sign-up",
      name: "Регистрация",
      path: "/sign-up",
      element: <SignUp />,
    },
} as const;

export type routeType = keyof typeof ROUTES

export const routeConfig = Object.fromEntries(
  Object.entries(ROUTES).map(([key, value]) => {
    return [
      key,
      {
        path: value.path,
        element: value.element,
      }
    ]
  })
) as Record<routeType, RouteObject>