// CORRECTO (POR AHORA)
import { useGetGenres } from '../services/queries';
import { NavLink } from 'react-router-dom';
import { useMoviesPageStore } from '../store/MoviesPageStore';

function Genres() {
  const { data, isLoading, error } = useGetGenres();
  const setPage = useMoviesPageStore(state => state.setPage);
  const genres = data?.data.genres;

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <div>
      {
        genres?.map((genre, index) =>
          <NavLink onClick={() => setPage(1)} key={index} to={`/movies/genres/${genre.name?.toLowerCase()}`} state={{ genre }}>{genre.name} </NavLink>
        )
      }
    </div>
  )
}
export default Genres