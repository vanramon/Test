import { create } from 'zustand';

export const useStore = create((set) => ({
  username: localStorage.getItem('username') || '',
  password: localStorage.getItem('password') || '',
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));
