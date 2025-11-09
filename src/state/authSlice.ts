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

export interface AuthSlice {
  error: string[] | null;
  loadingRegister: boolean;
  loadingLogin: boolean;
  register: (args: AuthCredentials) => Promise<void>;
  login: (args: AuthCredentials) => Promise<void>;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  error: null,
  loadingRegister: false,
  loadingLogin: false,
  register: async (body: AuthCredentials) => {
    try {
      set({ loadingRegister: true });
      await registerRequest(body);
      set({ loadingRegister: false });
    } catch (error) {
      set({ loadingRegister: false });

      if (isAxiosError(error)) {
        if (isApiError(error)) {
          set({ error: error.response.data.errors });
          return;
        }

        set({ error: UNKNOWN_AXIOS_ERROR });
        return;
      }

      set({ error: UNKNOWN_ERROR });
    }
  },
  login: async (body: AuthCredentials) => {
    try {
      set({ loadingLogin: true });
      await loginRequest(body);
      set({ loadingLogin: false });
    } catch (error) {
      set({ loadingLogin: false });

      if (isAxiosError(error)) {
        if (isApiError(error)) {
          set({ error: error.response.data.errors });
          return;
        }

        set({ error: UNKNOWN_AXIOS_ERROR });
        return;
      }

      set({ error: UNKNOWN_ERROR });
    }
  },
});
