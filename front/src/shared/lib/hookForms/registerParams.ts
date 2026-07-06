import { EMAIL_REGEX } from "@/shared/model";
import type { RegisterOptions } from "react-hook-form";

  const MIN_PASSWORD_LENGTH = 8;

  export const registerFormParams: RegisterOptions = {
    required: {
      value: true,
      message: "Поле обязательно!"
    },
    pattern: {
      value: EMAIL_REGEX,
      message: 'Некорректный Email'
    },
    minLength: {
      value: MIN_PASSWORD_LENGTH,
      message: `Длина поля должна быть ${MIN_PASSWORD_LENGTH} сиволов`
    }
  }