// SÍ
import Image from './Image';
import { DiscoverMovie } from '../types/moviesTypes';
import { useGetGenres } from '../services/queries';

type PeliculaFeaturedProps = React.ComponentProps<typeof Image> & {
  movieName?: string;
  releaseYear?: string | number;
  genres?: string[];
  movie: DiscoverMovie;
}

function PeliculaFeatured({ className, orientation, movieName, genres, releaseYear, movie }: PeliculaFeaturedProps) {
  const { data } = useGetGenres();
  const genresString = genres ? `${genres[0]}, ${genres[1]}` : 'Acción, Aventura';

  const release_year = movie ? movie.release_date?.split('-')[0] : 'NaN';
  const genres_arr = movie ? movie.genre_ids : '';

  const genres_string = data?.data?.genres?.filter(genre => movie.genre_ids?.includes(genre.id)).map(genre => genre.name);

  console.log(genres_string)
  
  return (
    <Image orientation={orientation} className={className}>
      <div className='flex flex-col gap-2'>
        <p className='w-fit font-bold text-sm lg:text-base'>{ movie ? movie.title : 'Nombre Película' }</p>
        <p className='text-[12.8px]'>{releaseYear ? releaseYear : '2018'}, {genres_string![0]}, {genres_string![1]}, {genres_string![2]}</p>
      </div>
{/*       <div className='flex flex-col gap-2'>
        <p className='w-fit font-bold text-sm lg:text-base'>{ movieName ? movieName : 'Nombre Película' }</p>
        <p className='text-[12.8px]'>{releaseYear ? releaseYear : '2018'}, {genresString}</p>
      </div> */}
    </Image>
  )
}
export default PeliculaFeatured