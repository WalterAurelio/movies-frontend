import { create } from 'zustand';

type AuthProvider = {
  auth: {
    accessToken?: string,
    email?: string
  } | undefined,
  setAuth: (value: AuthProvider['auth']) => void
}

export const useAuthProvider = create<AuthProvider>((set) => ({
  auth: undefined,
  setAuth: (value) => {
    set({ auth: value });
  }
}));