// CORRECTO (POR AHORA)
import Genres from '../components/Genres';
import { Outlet } from 'react-router-dom';

function MoviesLayout() {
  return (
    <>
      <Genres />
      <Outlet context={{ hello: 'World' }} />
    </>
  )
}
export default MoviesLayout