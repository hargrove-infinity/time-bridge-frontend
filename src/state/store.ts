import { create } from "zustand";
import { createAuthSlice, type AuthSlice } from "./auth";

type StoreState = AuthSlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createAuthSlice(...a),
}));
