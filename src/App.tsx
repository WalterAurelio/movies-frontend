import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import MoviesLayout from './layout/MoviesLayout';
import { default as NavTwo } from './components/Navbar';
import Navbar from './interfaces/Navbar';
import GenreMovies from './components/GenreMovies';
import SignUp from './pages/SignUp';
import LogInPage from './pages/LogInPage';
import SearchResults from './components/SearchResults';
import RequireAuth from './components/RequireAuth';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
      <NavTwo />
      {/* <Navbar /> */}

      <Routes>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />

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
