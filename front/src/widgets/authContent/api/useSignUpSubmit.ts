import { setAuth, useSignUpMutation, type IAuthUserCreate } from "@/features/auth";
import { handleApiError } from "@/shared/lib";
import { useSiteNavigate } from "@/shared/model";
import type { UseFormClearErrors, UseFormSetError } from "react-hook-form";
import { useDispatch } from "react-redux";

export function useSignUpSubmit(setError: UseFormSetError<IAuthUserCreate>, clearErrors: UseFormClearErrors<IAuthUserCreate>) {
  const [signUp, {isLoading}] = useSignUpMutation();
  const navigate = useSiteNavigate();
  const dispatch = useDispatch();
  async function onSubmit(data: IAuthUserCreate) {
    try {
      clearErrors("root.server");
      await signUp(data).unwrap();
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