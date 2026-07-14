import { useSignInMutation, type TAuthUserLogin } from "@/features/auth";
import { getApiError } from "@/shared/lib";
import type { UseFormClearErrors, UseFormSetError } from "react-hook-form";

export function useSignInSubmit(setError: UseFormSetError<TAuthUserLogin>, clearErrors: UseFormClearErrors<TAuthUserLogin>) {
  const [signIn, {isLoading}] = useSignInMutation();

  async function onSubmit(data: TAuthUserLogin) {
    clearErrors("root.server");
    const response = await signIn(data);
    const error = getApiError(response.error);
    if (error) {
      setError("root.server", { message: error.message})
      console.error(response.error);
      return;
    }
  }

  return {onSubmit, isLoading};
}