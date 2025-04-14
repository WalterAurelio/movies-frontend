import { useShallow } from 'zustand/shallow';
import axios from '../api/axios';
import { useAuthProvider } from '../store/AuthProviderStore';

type RefreshTokenResponse = {
  accessToken: string;
  roles: number[];
}

export function useRefreshToken() {
  const { auth, setAuth } = useAuthProvider(useShallow(state => ({
    auth: state.auth,
    setAuth: state.setAuth
  })));

  const refresh = async () => {
    const res = await axios.get<RefreshTokenResponse>('/api/auth/refresh-token', {
      withCredentials: true
    });
    console.log('Soy response en refresh', res);
    setAuth({ ...auth, accessToken: res.data.accessToken });
    return res.data.accessToken;
  }

  return refresh;
};