import { useShallow } from 'zustand/shallow';
import { useAuthProvider } from '../store/AuthProviderStore'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function RequireAuth() {
  const { auth } = useAuthProvider(useShallow(state => ({
    auth: state.auth
  })));
  const location = useLocation();
  
  return (
    auth?.accessToken
      ? <Outlet />
      : <Navigate to='/login' state={{ from: location }} replace />
  )
}
export default RequireAuth