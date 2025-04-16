import { useSearchParams } from 'react-router-dom'
import { useSearchMovies } from '../services/queries';

function SearchResults() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('q'));
  const { data, isLoading, error } = useSearchMovies(searchParams.get('q')!);
  const results = data?.data.results

  return (
    <div>
      Hola {JSON.stringify(results)}
    </div>
  )
}
export default SearchResults