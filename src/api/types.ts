import type { AxiosPromise, AxiosError, AxiosResponse } from "axios";
import type { AppErrorItem } from "@/state";

// Axios
interface ApiResponsePayload<T> {
  payload: T;
}

export type ApiPromise<T> = AxiosPromise<ApiResponsePayload<T>>;

export interface ApiErrorPayload {
  errors: AppErrorItem[];
}

export type ApiError = AxiosError<ApiErrorPayload> & {
  response: AxiosResponse<ApiErrorPayload>;
};

// Auth
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterRequestPayload {
  nextStep: string;
}

export interface EmailConfirmRequestArgs {
  email: string;
  code: string;
}
