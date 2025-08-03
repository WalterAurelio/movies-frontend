import { cva, VariantProps } from 'class-variance-authority'

const variants = cva(['']);

function SearchBar() {
  return (
    <div>
      <input
        type='text'
        placeholder='Buscar...'
      />
      <button
        type='button'
      >
        
      </button>
    </div>
  )
}
export default SearchBar