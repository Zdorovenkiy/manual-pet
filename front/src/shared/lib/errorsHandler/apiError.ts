import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { isFetchBaseQueryError } from "./isFetchBaseQueryError";

export interface IApiError {
  statusCode: number;
  message: string;
  path: string;
  timestamp: string;
  error: string;
}

export function getApiError(
  error: FetchBaseQueryError | SerializedError | undefined | unknown,
): IApiError | null {
  if (!isFetchBaseQueryError(error)) {
    return null;
  }

  return error.data as IApiError;
}