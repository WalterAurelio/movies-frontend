// SÍ
import chevronDown from '../assets/icons/ChevronDown.svg';

function BackButton() {
  return (
    <button className='w-10.5 h-7 rounded-full pr-0.5 flex items-center justify-center bg-negro-traslucido'>
      <img 
        src={chevronDown}
        alt='chevron-icon'
        className='rotate-90 w-3.5 h-2'
      />
    </button>
  )
}
export default BackButton