import { api } from "./api";
import { AUTH_ENDPOINTS } from "./endpoints";
import type {
  ApiPromise,
  AuthCredentials,
  EmailConfirmRequestArgs,
  RegisterRequestPayload,
} from "./types";

export const registerRequest = (
  args: AuthCredentials
): ApiPromise<RegisterRequestPayload> => {
  return api.post(AUTH_ENDPOINTS.REGISTER, args);
};

export const emailConfirmRequest = (
  args: EmailConfirmRequestArgs
): ApiPromise<string> => {
  return api.post(AUTH_ENDPOINTS.EMAIL_CONFIRM, args);
};

export const resendCodeRequest = (
  email: string
): ApiPromise<{
  nextResendTime: string;
}> => {
  return api.post(AUTH_ENDPOINTS.RESEND_CODE, { email });
};

export const loginRequest = (args: AuthCredentials): ApiPromise<string> => {
  return api.post(AUTH_ENDPOINTS.LOGIN, args);
};
