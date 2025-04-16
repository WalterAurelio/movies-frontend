// CORRECTO (POR AHORA)
import { Link, useLocation } from 'react-router-dom';
import { useDiscoverMoviesPaginated } from '../services/queries';
import { useMoviesPageStore } from '../store/MoviesPageStore';
import { useShallow } from 'zustand/shallow';
import MoviesArrayR from '../components/MoviesArrayR';

function MoviesByGenre() {
  const location = useLocation();
  const { id: genreId, name: genreName } = location.state.genre;
  const { page, setPage } = useMoviesPageStore(useShallow(state => ({
    page: state.page,
    setPage: state.setPage
  })))
  const { data, isLoading, error } = useDiscoverMoviesPaginated(page, { with_genres: genreId });
  const movies = data?.data.results;

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <div>
      <p>Página: {page}</p>
      <h2 className='text-2xl'>{genreName}</h2>
      <Link to='/movies'>Ir a Películas</Link>
      <MoviesArrayR movies={movies!} />
      <button
        type='button'
        disabled={page === 1 || isLoading}
        onClick={() => setPage(page - 1)}
      >
        Anterior
      </button>
      <br />
      <button
        type='button'
        disabled={page === data?.data.total_pages || isLoading}
        onClick={() => setPage(page + 1)}
      >
        Siguiente
      </button>
    </div>
  )
}
export default MoviesByGenre