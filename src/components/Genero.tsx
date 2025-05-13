// SÍ
type GeneroProps = {
  icono?: string;
  genero?: string;
}

function Genero({ icono, genero }: GeneroProps) {
  return (
    <article className='flex flex-col items-center w-fit gap-3'>
      <div className='aspect-square w-33 min-w-[118.67px] flex flex-col justify-center items-center rounded-full bg-negro-genre lg:hover:border-2 lg:hover:border-blanco-main lg:hover:cursor-pointer lg:transition-all lg:hover:scale-110 peer'>
        <div className='bg-gris-placeholder h-16 w-16'></div>
      </div>
      <p className='text-sm lg:text-base text-gris-placeholder lg:peer-hover:text-blanco-main lg:transition-all'>{ genero ? genero : 'Acción' }</p>
    </article>
  )
}
export default Genero