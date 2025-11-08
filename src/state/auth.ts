import type { StateCreator } from "zustand";
import { api, AUTH_ENDPOINTS } from "@/api";

interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthSlice {
  loadingRegister: boolean;
  register: (args: AuthCredentials) => Promise<void>;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  loadingRegister: false,
  register: async (body: AuthCredentials) => {
    set({ loadingRegister: true });
    await api.post(AUTH_ENDPOINTS.REGISTER, body);
    set({ loadingRegister: false });
  },
});
