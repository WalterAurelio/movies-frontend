import { Link, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { logOut } from '../services/api';
import { useAuthProvider } from '../store/AuthProviderStore';
import { useQueryClient } from '@tanstack/react-query';

function Navbar() {
  const axiosPrivate = useAxiosPrivate();
  const { setAuth } = useAuthProvider();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClick = async () => {
    await logOut(axiosPrivate);
    queryClient.clear()
    setAuth(undefined);
    navigate('/login');
  }

  return (
    <nav className='bg-amber-200 flex justify-between py-4'>
      <Link to='/'>Logo</Link>

      <ul className='flex gap-8'>
        <li className='hover:underline'>
          <Link to='/login'>Log In</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/'>Inicio</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/movies'>Películas</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/profile'>Perfil</Link>
        </li>
        <li>
          <p onClick={() => handleClick()}>Log out</p>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar