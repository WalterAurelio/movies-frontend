import { Link } from 'react-router-dom';
import homeIcon from '../assets/icons/Home.svg';
import movieIcon from '../assets/icons/Movie.svg';
import searchIcon from '../assets/icons/Search.svg';
import starIcon from '../assets/icons/Star.svg';
import userIcon from '../assets/icons/User.svg';

function Navbar() {
  return (
    <nav className='flex flex-col items-center justify-center h-18 bg-negro-main border-t-1 border-gris-border lg:border-t-0 lg:border-b-1'>
      <ul className='min-w-89 flex max-w-240 items-center justify-between lg:w-full lg:justify-start lg:*:not-first:not-last:ml-8'>
        <li className='lg:order-1'>
          <Link to='/'>
            <img src={homeIcon} alt='home-icon' />
          </Link>
        </li>
        <li className='hidden lg:block lg:order-2'>
          <Link to='/'>
            <img src={movieIcon} alt='movie-icon' />
          </Link>
        </li>
        <li className='lg:order-4'>
          <Link to='/'>
            <img src={searchIcon} alt='search-icon' />
          </Link>
        </li>
        <li className='lg:order-3'>
          <Link to='/'>
            <img src={starIcon} alt='star-icon' />
          </Link>
        </li>
        <li className='lg:ml-auto lg:w-12 lg:aspect-square lg:flex lg:items-center lg:justify-center lg:bg-gris-placeholder lg:rounded-full lg:order-5'>
          <Link to='/'>
            <img src={userIcon} alt='profile-icon' />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar