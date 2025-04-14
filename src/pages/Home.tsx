import MoviesArray from '../components/MoviesArray'
import { useRefreshToken } from '../hooks/useRefreshToken'

function Home() {
  const refresh = useRefreshToken();

  return (
    <div>
      <button
      type='button'
      onClick={() => refresh()}
      >
        Refresh
      </button>
      <MoviesArray />
    </div>
  )
}
export default Home
