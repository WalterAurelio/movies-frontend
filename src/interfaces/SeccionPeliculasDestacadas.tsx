import PeliculaFeatured from '../components/PeliculaFeatured';
import clsx from 'clsx';
import { DiscoverMovie } from '../types/moviesTypes';

type SeccionPeliculasDestacadasProps = {
  sectionTitle: string;
  movies: DiscoverMovie[] | undefined;
  orientation?: 'vertical' | 'horizontal';
};

function SeccionPeliculasDestacadas({ sectionTitle, movies, orientation }: SeccionPeliculasDestacadasProps) {
  return (
    <section className='flex flex-col gap-6'>
      <h3 className='font-bold text-blanco-main text-xl lg:text-[25px]'>{sectionTitle}</h3>
      <div className='flex gap-4'>
        {
          movies?.map((movie, index) =>
            <PeliculaFeatured 
              key={index} 
              className={clsx('min-w-60 lg:min-w-70', {
                'lg:min-w-90': orientation === 'horizontal' || !orientation
              })}
              orientation={orientation}
              movie={movie}
            />
          )
        }
      </div>
    </section>
  )
}
export default SeccionPeliculasDestacadas