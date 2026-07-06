import { useSignInMutation, type TAuthUserLogin } from "@/features/auth";
import { tokenStorage } from "@/shared/lib";

export function useSignInSubmit() {
  const [signIn, {isLoading}] = useSignInMutation();

  async function onSubmit(data: TAuthUserLogin) {
    const response = await signIn(data);
    if (response.error) {
      console.error(response.error);
      return;
    }

    const { accessToken, refreshToken } = response.data;
    tokenStorage.setTokens(accessToken, refreshToken);
  }

  return {onSubmit, isLoading};
}