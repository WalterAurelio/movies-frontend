import { axiosPrivate } from '../api/axios';
import { useEffect } from 'react';
import { useAuthProvider } from '../store/AuthProviderStore';
import { useRefreshToken } from './useRefreshToken';
import { useShallow } from 'zustand/shallow';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const auth = useAuthProvider(useShallow(state => state.auth));

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(config => {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    });

    const responseInterceptor = axiosPrivate.interceptors.response.use(response => {
      return response;
    }, async (error) => {
      const prevRequest = error?.config;
      if (error?.response?.status === 403 && !prevRequest?.sent) {
        prevRequest.sent = true;
        const newAccessToken = await refresh();
        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosPrivate(prevRequest);
      }
      return Promise.reject(error);
    });

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    }
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;