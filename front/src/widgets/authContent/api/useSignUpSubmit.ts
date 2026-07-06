import { useSignUpMutation, type IAuthUserCreate } from "@/features/auth";
import { tokenStorage } from "@/shared/lib";

export function useSignUpSubmit() {
  const [signUp, {isLoading}] = useSignUpMutation();

  async function onSubmit(data: IAuthUserCreate) {
    const response = await signUp(data);
    if (response.error) {
      console.error(response.error);
      return;
    }

    const { accessToken, refreshToken } = response.data;
    tokenStorage.setTokens(accessToken, refreshToken);
  }

  return {onSubmit, isLoading};
}