import type { StateCreator } from "zustand";
import {
  type AuthCredentials,
  loginRequest,
  registerRequest,
  isApiError,
  isAxiosError,
  UNKNOWN_AXIOS_ERROR,
  UNKNOWN_ERROR,
} from "@/api";
import { getToken, setToken } from "@/lib";
import type { AppErrorItem } from "./types";

export interface AuthSlice {
  errors: AppErrorItem[] | null;
  loadingRegister: boolean;
  loadingLogin: boolean;
  isAuthenticated: boolean;
  register: (args: AuthCredentials) => Promise<void>;
  login: (args: AuthCredentials) => Promise<void>;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  errors: null,
  loadingRegister: false,
  loadingLogin: false,
  isAuthenticated: !!getToken(),
  register: async (body: AuthCredentials) => {
    try {
      set({ loadingRegister: true });
      const res = await registerRequest(body);
      const { payload } = res.data;
      setToken(payload);
      set({ loadingRegister: false, isAuthenticated: true });
    } catch (error) {
      set({ loadingRegister: false });

      if (isAxiosError(error)) {
        if (isApiError(error)) {
          set({ errors: error.response.data.errors });
          return;
        }

        set({ errors: UNKNOWN_AXIOS_ERROR });
        return;
      }

      set({ errors: UNKNOWN_ERROR });
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
          return;
        }

        set({ errors: UNKNOWN_AXIOS_ERROR });
        return;
      }

      set({ errors: UNKNOWN_ERROR });
    }
  },
});
