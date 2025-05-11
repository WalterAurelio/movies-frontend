// SÍ
import Image from './Image';

type PeliculaFeaturedProps = React.ComponentProps<typeof Image> & {
  movieName?: string;
  releaseYear?: string | number;
  genres?: string[];
}

function PeliculaFeatured({ orientation, movieName, genres, releaseYear }: PeliculaFeaturedProps) {
  return (
    <Image orientation={orientation}>
      <div className='gap-2'>
        <p className='w-fit font-bold text-sm lg:text-base'>{ movieName ? movieName : 'Nombre Película' }</p>
        
      </div>
    </Image>
  )
}
export default PeliculaFeatured