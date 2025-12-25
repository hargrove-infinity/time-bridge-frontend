import type { StateCreator } from "zustand";
import {
  type AuthCredentials,
  loginRequest,
  registerRequest,
  isApiError,
  isAxiosError,
  UNKNOWN_AXIOS_ERROR,
  UNKNOWN_ERROR,
  type EmailConfirmRequestArgs,
  emailConfirmRequest,
} from "@/api";
import { LOCAL_ERRORS_COMMON_NAMESPACE } from "@/constants";
import { displayNotification, getToken, setToken } from "@/lib";
import type { AppErrorItem } from "./types";

export interface AuthSlice {
  errors: AppErrorItem[] | null;
  loadingRegister: boolean;
  loadingEmailConfirm: boolean;
  loadingLogin: boolean;
  isAuthenticated: boolean;
  nextStep: string | null;
  register: (args: AuthCredentials) => Promise<void>;
  emailConfirm: (args: EmailConfirmRequestArgs) => Promise<void>;
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
  emailConfirm: async (body: EmailConfirmRequestArgs) => {
    try {
      set({ loadingEmailConfirm: true });
      const res = await emailConfirmRequest(body);
      const { payload } = res.data;
      setToken(payload);
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
