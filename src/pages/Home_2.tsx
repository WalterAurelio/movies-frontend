import { useDiscoverMovies } from '../services/queries';

function Home_2() {
  const { data } = useDiscoverMovies();

  return (
    <div>{JSON.stringify(data)}</div>
  )
}
export default Home_2