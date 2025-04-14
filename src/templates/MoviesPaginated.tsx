// CORRECTO (POR AHORA)
import { useState } from 'react';
import { useDiscoverMoviesPaginated } from '../services/queries';
import MovieArticle from '../components/MovieArticle';

function MoviesPaginated() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useDiscoverMoviesPaginated(page);
  const movies = data?.data.results?.flatMap(movie => movie);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <div>
      <div className='flex flex-wrap gap-4'>
        {
          movies?.map((movie, index) =>
            <MovieArticle key={index} movie={movie} />
          )
        }
      </div>
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