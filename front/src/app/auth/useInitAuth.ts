import { useRefreshMutation } from "@/features/auth/api/authApi";
import { handleApiError } from "@/shared/lib";
import { authStorage } from "@/shared/model";
import { useEffect, useState } from "react";

export default function useInitAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, {}] = useRefreshMutation();

  async function refreshHandler(refreshToken: string) {
    try {
      await refresh({refreshToken}).unwrap();
    } catch (error) {
      handleApiError(error, (apiError) => {
        if (apiError.error === "Unauthorized") {
          authStorage.clear();
        }
      })
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const refresh = authStorage.getRefresh();
    if (!refresh) {
      setIsLoading(false);
      return;
    }
    refreshHandler(refresh);    
  }, []);

  return { isLoading };
}