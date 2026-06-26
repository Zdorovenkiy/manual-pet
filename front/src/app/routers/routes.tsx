import { NotFoundPage } from "@/pages/notFound";
import { MainPage } from "@/pages/main";
import { SignInPage } from "@/pages/signIn";
import { SignUpPage } from "@/pages/signUp";
import type { TRouteEnumValues } from "./types";
import ResetPassword from "@/pages/resetPassword/ui/ResetPasswordPage";
import { PostPage } from "@/pages/post";
import { CatalogPage } from "@/pages/catalog";

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
      element: <SignInPage />,
      layout: "AUTH"
    },
    SIGN_UP: {
      id: "sign-up",
      name: "Регистрация",
      path: "/sign-up",
      element: <SignUpPage />,
      layout: "AUTH"
    },
    RESET_PASSWORD: {
      id: "reset-password",
      name: "Сброс пароля",
      path: "/reset-password",
      element: <ResetPassword />,
      layout: "AUTH"
    },
    POST: {
      id: "post",
      name: "Пост",
      path: "/post/:id",
      element: <PostPage />,
      layout: "BASE"
    },
    CATALOG: {
      id: "catalog",
      name: "Каталог",
      path: "/catalog",
      element: <CatalogPage />,
      layout: "BASE"
    },
} as const satisfies Record<string, TRouteEnumValues>;