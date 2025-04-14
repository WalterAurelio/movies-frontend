import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
  });
  const [searchState, setSearchState] = useState(searchParams.get('query') || '');
  const navigate = useNavigate();

  const handleSubmit = () => {
    setSearchParams({ query: searchState });
    navigate(`/search/movies?q=${encodeURIComponent(searchState)}`, { state: searchState });
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Buscar...'
        value={searchState}
        onChange={(e) => setSearchState(e.target.value)}
      />
      <button
        type='button'
        onClick={() => handleSubmit() }
      >
        Buscar
      </button>
    </div>
  )
}
export default SearchBar