import type { StateCreator } from "zustand";
import { api, AUTH_ENDPOINTS } from "@/api";
import { setToken } from "@/lib/token";

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
    const res = await api.post(AUTH_ENDPOINTS.REGISTER, body);
    const { payload } = res.data;
    setToken(payload);
    set({ loadingRegister: false });
  },
  login: async (body: AuthCredentials) => {
    set({ loadingLogin: true });
    const res = await api.post(AUTH_ENDPOINTS.LOGIN, body);
    const { payload } = res.data;
    setToken(payload);
    set({ loadingLogin: false });
  },
});
