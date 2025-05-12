type GeneroProps = {
  icono?: string;
  genero?: string;
}

function Genero({ icono, genero }: GeneroProps) {
  return (
    <article className='flex flex-col items-center w-fit gap-3'>
      <div className='aspect-square w-33 min-w-[118.67px] flex flex-col justify-center items-center rounded-full bg-negro-genero'>
        <div className='bg-gris-placeholder h-16 w-16'></div>
      </div>
      <p className='text-sm lg:text-base text-blanco-main'>{ genero ? genero : 'Acción' }</p>
    </article>
  )
}
export default Genero