import type { AxiosPromise, AxiosError, AxiosResponse } from "axios";

// Axios
interface ApiResponsePayload<T> {
  payload: T;
}

export type ApiPromise<T> = AxiosPromise<ApiResponsePayload<T>>;

export interface ApiErrorItem {
  code: string;
  data: string[];
  description: string;
}

export interface ApiErrorPayload {
  errors: ApiErrorItem[];
}

export type ApiError = AxiosError<ApiErrorPayload> & {
  response: AxiosResponse<ApiErrorPayload>;
};

// Auth
export interface AuthCredentials {
  email: string;
  password: string;
}
