// import { useNavigate } from 'react-router-dom';
import { useDiscoverMoviesPaginated } from '../services/queries';
import MovieArticle from '../components/MovieArticle';
import { useState } from 'react';

function MoviesPaginated() {
  const [page, setPage] = useState(1); 
  const { data, isLoading, error } = useDiscoverMoviesPaginated(page);
  // const navigate = useNavigate();
  const movies = data?.data.results?.flatMap(movie => movie);


  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <div className='flex gap-4 flex-wrap'>
      {movies?.map((movie, index) => (
        <MovieArticle
          key={index}
          movie={movie!}
        />
      ))}
      <button
        type='button'
        onClick={() => setPage(prev => prev - 1)}
      >
        Anterior
      </button>
      <button
        type='button'
        onClick={() => setPage(prev => prev + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}
export default MoviesPaginated