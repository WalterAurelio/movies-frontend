// SÍ
import chevronDown from '../assets/icons/ChevronDown.svg';

function AnteriorSiguiente() {
  return (
    <div className='flex gap-8'>
      <button className='flex gap-2 items-center text-sm lg:text-base text-blanco-main'>
        <img 
          src={chevronDown}
          alt='chevron-icon'
          className='rotate-90 w-[10.5px] h-1.5 lg:w-3.5 lg:h-2'
        />
        Anterior
      </button>
      <button className='flex gap-2 items-center text-sm lg:text-base text-blanco-main'>
        Siguiente
        <img 
          src={chevronDown}
          alt='chevron-icon'
          className='-rotate-90 w-[10.5px] h-1.5 lg:w-3.5 lg:h-2'
        />
      </button>
    </div>
  )
}
export default AnteriorSiguiente