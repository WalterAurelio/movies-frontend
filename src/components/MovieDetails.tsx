// CORRECTO (POR AHORA)
import { useQuery } from '@tanstack/react-query';
import { useGetMovieDetails, useGetMovieVideos } from '../services/queries';
import Description from './Description';

type MovieDetailsProps = {
  movieId: string;
}

function MovieDetails({ movieId }: MovieDetailsProps) {
  const { data: detailsData, isLoading: detailsLoading, error: detailsError } = useGetMovieDetails(movieId);
  const { data: videosData, isLoading: videosLoading, error: videosError } = useGetMovieVideos(movieId);
  const movie = detailsData?.data;
  const movieBackdrop = 'https://image.tmdb.org/t/p/w500' + movie?.backdrop_path;
  const genres = movie?.genres?.map(genre => genre.name);
  const releaseYear = movie?.release_date?.split('-')[0];
  const videos = videosData?.data.results?.map(video => {
    if (video.site === 'YouTube' && video.type === 'Teaser' && video.key) {
      return video.key;
    }
    return false;
  }).filter(e => e !== false);
  const videoURL = 'https://www.youtube.com/watch?v=';

  function randomVideoKey() {
    if (videos) {
      const randomIndex = Math.floor(Math.random() * videos?.length);
      return videos[randomIndex];
    }
  }

  if (detailsLoading || videosLoading) return <div>Cargando...</div>;
  if (detailsError || videosError) return <div>Ha ocurrido un error: {detailsError?.message || videosError?.message}</div>;

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
      <a href={videoURL + randomVideoKey()} target='_blank'>
        <Description>Ver video</Description>
      </a>
    </div>
  )
}
export default MovieDetails