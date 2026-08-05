import { setAuth, useSignInMutation, type TAuthUserLogin } from "@/features/auth";
import { getApiError, handleApiError } from "@/shared/lib";
import { useSiteNavigate } from "@/shared/model";
import type { UseFormClearErrors, UseFormSetError } from "react-hook-form";
import { useDispatch } from "react-redux";

export function useSignInSubmit(setError: UseFormSetError<TAuthUserLogin>, clearErrors: UseFormClearErrors<TAuthUserLogin>) {
  const [signIn, {isLoading}] = useSignInMutation();
  const navigate = useSiteNavigate();
  const dispatch = useDispatch();
  async function onSubmit(data: TAuthUserLogin) {
    try {
      clearErrors("root.server");
      await signIn(data).unwrap();
      dispatch(setAuth(true));
      navigate("MAIN");
    } catch (error) {
      handleApiError(error, (apiError) => {
        setError("root.server", { message: apiError.message})
      })
      console.error(error);
    }
  }

  return {onSubmit, isLoading};
}