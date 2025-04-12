import { Link, NavLink, Outlet } from "react-router-dom"
import { useGetGenres } from '../services/queries'

function MoviesLayout() {
  const { data, isLoading, error } = useGetGenres();
  const genres = data?.data.genres?.map(genre => genre);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>MoviesLayout</div>
      {
        genres?.map((genre, index) =>
          <NavLink  key={index} to={`/movies/genres/${genre.name?.toLowerCase()}`} state={{ genre }}>{genre.name}</NavLink>
        )
      }
      <Outlet context={{ hello: 'World' }} />
    </>
  )
}
export default MoviesLayout