import AuthLayout from "./AuthLayout/AuthLayout";
import BaseLayout from "./BaseLayout/BaseLayout";

export const layoutsEnum = {
  BASE: BaseLayout,
  AUTH: AuthLayout,
} as const

export type TLayoutEnumKey = keyof typeof layoutsEnum;

