/* // CORRECTO (POR AHORA)
import { useNavigate } from 'react-router-dom';
import { useDiscoverMovies } from '../services/queries';
import MovieArticle from './MovieArticle';

function MoviesArray() {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useDiscoverMovies();
  const movies = data?.pages.flatMap(page => page.data.results);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (movies && movies.length > 20) {
      navigate({ pathname: '/movies' });
    } else {
      fetchNextPage();
    }
  };

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <div>
      <div className='flex flex-wrap gap-4'>
        {
          movies?.map((movie, index) =>
            movie && <MovieArticle key={index} movie={movie} />
          )
        }
      </div>
      <button
        type='button'
        disabled={isFetchingNextPage}
        onClick={handleClick}
      >
        { isFetchingNextPage ? 'Cargando...' : movies && movies.length > 20 ? 'Ir a películas' : 'Ver más' }
      </button>
    </div>
  );
}
export default MoviesArray;
 */