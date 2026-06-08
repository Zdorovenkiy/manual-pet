import AuthFormResetPassword from "../../ui/AuthFormResetPassword/AuthFormResetPassword";
import AuthFormSignIn from "../../ui/AuthFormSignIn/AuthFormSignIn";
import AuthFormSignUp from "../../ui/AuthFormSignUp/AuthFormSignUp";

export const authEnum = {
  SIGN_IN: {
    headerButtonTitle: "Create an account",
    headerButtonPath: "SIGN_UP",
    FormComponent: AuthFormSignIn
  },
  SIGN_UP: {
    headerButtonTitle: "Sign in",
    headerButtonPath: "SIGN_IN",
    FormComponent: AuthFormSignUp
  },
  RESET_PASSWORD: {
    headerButtonTitle: "Sign in",
    headerButtonPath: "SIGN_IN",
    FormComponent: AuthFormResetPassword
  }
} as const

export type TAuthEnumKeys = keyof typeof authEnum;