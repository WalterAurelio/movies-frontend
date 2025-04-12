import { useLocation } from 'react-router-dom';
import MovieArticle from '../components/MovieArticle';
import { useDiscoverMovies } from '../services/queries'

function MoviesRow() {
  const location = useLocation();
  const { id: genreId, name: genreName } = location.state.genre;
  

  // 878
  const { data, isLoading, error } = useDiscoverMovies({ with_genres: genreId });
  const movies = data?.pages.flatMap(page => page.data.results);

  if (error) return <div>Ha ocurrido un error: {error.message}</div>;
  if (isLoading) return <div>Cargando...</div>;

  console.log(genreId, genreName)

  return (
    <div>
      <div>
        <h2>{genreName}</h2>
        <p>Ver todo</p>
      </div>
      <div>
        {
          movies?.map((movie, index) => (
            <MovieArticle
              key={index}
              movie={movie!}
            />
          ))
        }
      </div>
    </div>
  )
}
export default MoviesRow