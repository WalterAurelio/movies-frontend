// SÍ
import Image from './Image';

type PeliculaResultadoBusquedaProps = {
  movieName?: string;
  releaseYear?: string | number;
  genres?: string[];
}

function PeliculaResultadoBusqueda({ movieName, releaseYear, genres }: PeliculaResultadoBusquedaProps) {
  const genresString = genres ? `${genres[0]}, ${genres[1]}` : 'Acción, Aventura';

  return (
    <article className='flex flex-col gap-4'>
      <Image orientation={'vertical'} />
      <div className='flex flex-col gap-2'>
        <p className='text-[12.8px] text-gris-placeholder'>{ releaseYear ? releaseYear : '2018' }, {genresString}</p>
        <p className='text-sm lg:text-base font-bold text-blanco-main'>{ movieName ? movieName : 'Nombre película' }</p>
      </div>
    </article>
  )
}
export default PeliculaResultadoBusqueda