import { useSearchParams } from 'react-router-dom'
import { useDiscoverMovies } from '../services/queries';

function SearchResults() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('q'));
  const { data, isLoading, error } = useDiscoverMovies();

  return (
    <div>
      Hola
    </div>
  )
}
export default SearchResults