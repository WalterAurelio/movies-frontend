import { useNavigate } from 'react-router-dom';
import MoviesArrayR from '../components/MoviesArrayR';
import SearchBar from '../components/SearchBar';
import { useDiscoverMovies } from '../services/queries';

function Home() {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useDiscoverMovies();
  const movies = data?.pages.flatMap(page => page.data.results).filter(e => e !== undefined);
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
      <SearchBar />      
      {/* <MoviesArray /> */}
      <MoviesArrayR movies={movies!} />
      <button
        type='button'
        disabled={isFetchingNextPage}
        onClick={handleClick}
      >
        { isFetchingNextPage ? 'Cargando...' : movies && movies.length > 20 ? 'Ir a películas' : 'Ver más' }
      </button>
    </div>
  )
}
export default Home
