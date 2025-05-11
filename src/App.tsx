import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import MoviesLayout from './layout/MoviesLayout';
import Navbar from './components/Navbar';
import GenreMovies from './components/GenreMovies';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import SearchResults from './components/SearchResults';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/movies' element={<MoviesLayout />}>
            <Route index element={<Movies />} />
            <Route path='genres/:genre' element={<GenreMovies />} />
            <Route path=':id' element={<MovieDetails />} />
          </Route>

          <Route path='/search/movies' element={<SearchResults />}></Route>
        </Route>
        {/* <Route path="/movies/*" element={<MoviesStack />} /> */}
      </Routes>
    </>
  );
}
export default App;
