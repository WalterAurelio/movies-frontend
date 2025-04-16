import { DiscoverMovie } from '../types/moviesTypes';
import MovieArticle from './MovieArticle';

type MoviesArrayRProps = {
  movies: DiscoverMovie[];
}

function MoviesArrayR({ movies }: MoviesArrayRProps) {
  return (
    <div className='flex flex-wrap gap-4'>
      {
        movies &&
        movies.map((movie, index) =>
          <MovieArticle key={index} movie={movie} />
        )
      }
    </div>
  );
}
export default MoviesArrayR