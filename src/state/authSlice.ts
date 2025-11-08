import type { StateCreator } from "zustand";
import { api, AUTH_ENDPOINTS } from "@/api";

interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthSlice {
  loadingRegister: boolean;
  loadingLogin: boolean;
  register: (args: AuthCredentials) => Promise<void>;
  login: (args: AuthCredentials) => Promise<void>;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  loadingRegister: false,
  loadingLogin: false,
  register: async (body: AuthCredentials) => {
    set({ loadingRegister: true });
    await api.post(AUTH_ENDPOINTS.REGISTER, body);
    set({ loadingRegister: false });
  },
  login: async (body: AuthCredentials) => {
    set({ loadingLogin: true });
    await api.post(AUTH_ENDPOINTS.LOGIN, body);
    set({ loadingLogin: false });
  },
});
