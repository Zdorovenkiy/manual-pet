import { authStorage, useSignUpMutation, type IAuthUserCreate } from "@/features/auth";
import { getApiError } from "@/shared/lib";
import type { UseFormClearErrors, UseFormSetError } from "react-hook-form";

export function useSignUpSubmit(setError: UseFormSetError<IAuthUserCreate>, clearErrors: UseFormClearErrors<IAuthUserCreate>) {
  const [signUp, {isLoading}] = useSignUpMutation();

  async function onSubmit(data: IAuthUserCreate) {
    clearErrors("root.server");
    const response = await signUp(data);
    const error = getApiError(response.error);
    if (error) {
      setError("root.server", { message: error.message})
      console.error(response.error);
      return;
    }
  }

  return {onSubmit, isLoading};
}