import { useOutletContext, useParams } from "react-router-dom";
import MovieDetails from '../components/MovieDetails';

type PathParams = {
  id: string;
}

function MovieDetailsPage() {
  const { id } = useParams<PathParams>();
  
  return (
    <div>
      <div>MovieDetails: { id }</div>
      <MovieDetails movieId={id!} />
    </div>
  )
}
export default MovieDetailsPage