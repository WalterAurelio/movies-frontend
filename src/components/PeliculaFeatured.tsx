// SÍ
import Image from './Image';

type PeliculaFeaturedProps = React.ComponentProps<typeof Image> & {
  movieName?: string;
  releaseYear?: string | number;
  genres?: string[];
}

function PeliculaFeatured({ orientation, movieName, genres, releaseYear }: PeliculaFeaturedProps) {
  const genresString = genres ? `${genres[0]}, ${genres[1]}` : 'Acción, Aventura';
  
  return (
    <Image orientation={orientation}>
      <div className='flex flex-col gap-2'>
        <p className='w-fit font-bold text-sm lg:text-base'>{ movieName ? movieName : 'Nombre Película' }</p>
        <p className='text-[12.8px]'>{releaseYear ? releaseYear : '2018'}, {genresString}</p>
      </div>
    </Image>
  )
}
export default PeliculaFeatured