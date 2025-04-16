// CORRECTO (POR AHORA)
import { useState } from 'react';
import { useDiscoverMoviesPaginated } from '../services/queries';
import MoviesArrayR from '../components/MoviesArrayR';

function MoviesPaginated() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useDiscoverMoviesPaginated(page);
  const movies = data?.data.results?.flatMap(movie => movie);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <div>
      <MoviesArrayR movies={movies!} />
      <button
        type='button'
        disabled={page === 1 || isLoading}
        onClick={() => setPage(prev => prev - 1)}
      >
        Anterior
      </button>
      <br />
      <button
        type='button'
        disabled={page === data?.data.total_pages || isLoading}
        onClick={() => setPage(prev => prev + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}
export default MoviesPaginated