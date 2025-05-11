// SÍ
import searchBarIcon from '../assets/icons/SearchBar.svg';

function Search() {
  return (
    <div className='border-gris-border border-1 bg-blanco-main rounded-4xl flex'>
      <input
        type='text'
        placeholder='Buscar...'
        className='placeholder-gris-placeholder py-3 pl-4 text-sm lg:text-base outline-0 w-full'
      />
      <button
        className='cursor-pointer p-3'
      >
        <img src={searchBarIcon} alt='search-bar-icon' />
      </button>
    </div>
  )
}
export default Search