import { create } from 'zustand';

export const TOKEN_LS_KEY = 'token';

type AuthStore = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: Boolean(localStorage.getItem(TOKEN_LS_KEY)),
  setIsAuth: (isAuth) => set({ isAuth }),
}));
