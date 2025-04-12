import { Link } from 'react-router-dom';

function Navbar() {
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
      </ul>
    </nav>
  )
}
export default Navbar