// CORRECTO (POR AHORA)
import { useGetMovieDetails } from '../services/queries';
import Description from './Description';

type MovieDetailsProps = {
  movieId: string;
}

function MovieDetails({ movieId }: MovieDetailsProps) {
  const { data, isLoading, error } = useGetMovieDetails(movieId);
  const movie = data?.data;
  const movieBackdrop = 'https://image.tmdb.org/t/p/w500' + movie?.backdrop_path;
  const genres = movie?.genres?.map(genre => genre.name);
  const releaseYear = movie?.release_date?.split('-')[0];
  const videoURL = '';
  // const videos = data?.data.videos.results?.map(result => result.key);

  /* const randomVideo = () => {
    if (videos) {
      const index = Math.floor(Math.random() * videos.length);
      return videos[index];
    }
    return '';
  }
 */

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <div>
      <img src={movieBackdrop} alt={movie?.title} />
      <div>
        <Description>{movie?.runtime} minutos</Description>
        <Description>{releaseYear}</Description>
        <Description>{movie?.vote_average}</Description>
        <div>
          {
            genres?.map((genre, index) =>
              <Description key={index}>{genre}</Description>
            )
          }
        </div>
      </div>
      <Description>{movie?.overview}</Description>
      <a href={videoURL} target='_blank'>
        <Description>Ver video</Description>
      </a>
    </div>
  )
}
export default MovieDetails