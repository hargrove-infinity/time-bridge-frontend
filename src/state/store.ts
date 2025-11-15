import { create } from "zustand";
import { createAuthSlice, type AuthSlice } from "./authSlice";
import { createAppSlice, type AppSlice } from "./appSlice";

type StoreState = AuthSlice & AppSlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createAppSlice(...a),
}));
