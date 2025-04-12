// CORRECTO (POR AHORA)
import { DiscoverMovie } from '../types/moviesTypes';
import Description from './Description';
import { Link } from 'react-router-dom';

type MovieArticleProps = {
  movie: DiscoverMovie;
};

function MovieArticle({ movie }: MovieArticleProps) {
  const releaseYear = movie.release_date?.split('-')[0];
  const moviePath = '/movies/' + movie.id;
  const moviePoster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  // const release_year = movie.release_date?.split('-')[0];
  /* const { data, mutateAsync } = useAddMovieToFavorite();
  const movieToUpload = {
    adult: movie.adult,
    genre_ids: movie.genre_ids,
    id: movie.id,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    title: movie.title,
    vote_average: movie.vote_average
  }

  const handleClick = async (movieBody) => {
    await mutateAsync(movieBody);
  }; */

  return (
    <article className='w-36'>
      <Link to={moviePath}>
        <img src={moviePoster} alt={movie.original_title} className='h-54' />
      </Link>
      <Link to={moviePath}>
        <Description className='font-bold'>{movie.title}</Description>
      </Link>
      <Link to={moviePath}>
        <Description>{releaseYear}</Description>
      </Link>
    </article>
  );
}
export default MovieArticle;