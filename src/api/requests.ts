import { api } from "./api";
import { AUTH_ENDPOINTS } from "./endpoints";
import type {
  ApiPromise,
  AuthCredentials,
  RegisterRequestPayload,
} from "./types";

export const registerRequest = (
  args: AuthCredentials
): ApiPromise<RegisterRequestPayload> => {
  return api.post(AUTH_ENDPOINTS.REGISTER, args);
};

export const loginRequest = (args: AuthCredentials): ApiPromise<string> => {
  return api.post(AUTH_ENDPOINTS.LOGIN, args);
};
