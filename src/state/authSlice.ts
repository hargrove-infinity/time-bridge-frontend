import type { StateCreator } from "zustand";
import {
  type AuthCredentials,
  loginRequest,
  registerRequest,
  isApiError,
  isAxiosError,
  UNKNOWN_AXIOS_ERROR,
  UNKNOWN_ERROR,
  emailConfirmRequest,
  EMAIL_FOR_CONFIRMATION_MISSING,
} from "@/api";
import {
  LOCAL_ERRORS_AUTH_NAMESPACE,
  LOCAL_ERRORS_COMMON_NAMESPACE,
} from "@/constants";
import {
  deleteEmail,
  displayNotification,
  getEmail,
  getToken,
  setEmail,
  setToken,
} from "@/lib";
import type { AppErrorItem } from "./types";

export interface AuthSlice {
  errors: AppErrorItem[] | null;
  loadingRegister: boolean;
  loadingEmailConfirm: boolean;
  loadingLogin: boolean;
  isAuthenticated: boolean;
  nextStep: string | null;
  register: (args: AuthCredentials) => Promise<void>;
  emailConfirm: (code: string) => Promise<void>;
  login: (args: AuthCredentials) => Promise<void>;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  errors: null,
  loadingRegister: false,
  loadingEmailConfirm: false,
  loadingLogin: false,
  isAuthenticated: !!getToken(),
  nextStep: null,
  register: async (body: AuthCredentials) => {
    try {
      set({ loadingRegister: true });
      const res = await registerRequest(body);
      const { payload } = res.data;
      setEmail(body.email);
      set({ loadingRegister: false, nextStep: payload.nextStep });
    } catch (error) {
      set({ loadingRegister: false });

      if (isAxiosError(error)) {
        if (isApiError(error)) {
          set({ errors: error.response.data.errors });
          displayNotification({ errors: error.response.data.errors });
          return;
        }

        set({ errors: UNKNOWN_AXIOS_ERROR });
        displayNotification({
          errors: UNKNOWN_AXIOS_ERROR,
          ns: LOCAL_ERRORS_COMMON_NAMESPACE,
        });
        return;
      }

      set({ errors: UNKNOWN_ERROR });
      displayNotification({
        errors: UNKNOWN_ERROR,
        ns: LOCAL_ERRORS_COMMON_NAMESPACE,
      });
    }
  },
  emailConfirm: async (code: string) => {
    try {
      set({ loadingEmailConfirm: true });

      const email = getEmail();

      if (!email) {
        set({ errors: EMAIL_FOR_CONFIRMATION_MISSING });
        displayNotification({
          errors: EMAIL_FOR_CONFIRMATION_MISSING,
          ns: LOCAL_ERRORS_AUTH_NAMESPACE,
        });
        return;
      }

      const res = await emailConfirmRequest({ email, code });
      const { payload } = res.data;

      setToken(payload);
      deleteEmail();

      set({ loadingEmailConfirm: false, isAuthenticated: true });
    } catch (error) {
      set({ loadingEmailConfirm: false });

      if (isAxiosError(error)) {
        if (isApiError(error)) {
          set({ errors: error.response.data.errors });
          displayNotification({ errors: error.response.data.errors });
          return;
        }

        set({ errors: UNKNOWN_AXIOS_ERROR });
        displayNotification({
          errors: UNKNOWN_AXIOS_ERROR,
          ns: LOCAL_ERRORS_COMMON_NAMESPACE,
        });
        return;
      }

      set({ errors: UNKNOWN_ERROR });
      displayNotification({
        errors: UNKNOWN_ERROR,
        ns: LOCAL_ERRORS_COMMON_NAMESPACE,
      });
    }
  },
  login: async (body: AuthCredentials) => {
    try {
      set({ loadingLogin: true });
      const res = await loginRequest(body);
      const { payload } = res.data;
      setToken(payload);
      set({ loadingLogin: false, isAuthenticated: true });
    } catch (error) {
      set({ loadingLogin: false });

      if (isAxiosError(error)) {
        if (isApiError(error)) {
          set({ errors: error.response.data.errors });
          displayNotification({ errors: error.response.data.errors });
          return;
        }

        set({ errors: UNKNOWN_AXIOS_ERROR });
        displayNotification({
          errors: UNKNOWN_AXIOS_ERROR,
          ns: LOCAL_ERRORS_COMMON_NAMESPACE,
        });
        return;
      }

      set({ errors: UNKNOWN_ERROR });
      displayNotification({
        errors: UNKNOWN_ERROR,
        ns: LOCAL_ERRORS_COMMON_NAMESPACE,
      });
    }
  },
});
