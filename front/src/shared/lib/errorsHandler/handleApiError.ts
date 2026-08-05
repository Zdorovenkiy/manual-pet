import { getApiError, type IApiError } from "./apiError";

export function handleApiError(
  error: unknown,
  onApiError: (error: IApiError) => void,
) {
  const apiError = getApiError(error);

  if (apiError) {
    onApiError(apiError);
  } else {
    console.error(error);
  }
}