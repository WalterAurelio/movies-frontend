import { useInfiniteQuery, useQuery, keepPreviousData, useMutation } from '@tanstack/react-query';
import { signUp, logIn, discoverMovies, getMovieDetails, getMovieGenres, searchMovies } from './api';
import { DiscoverMoviesFilters } from '../types/moviesTypes';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

// User (todos correcto)
export function useSignUp() {
  return useMutation({
    mutationFn: signUp
  });
}

export function useLogIn() {
  return useMutation({
    mutationFn: logIn
  });
}

// Movies (todos correcto)
export function useDiscoverMovies(filters?: DiscoverMoviesFilters) {
  const axiosPrivate = useAxiosPrivate();

  return useInfiniteQuery({
    queryKey: ['moviesDiscover'],
    queryFn: ({ pageParam }) => discoverMovies(axiosPrivate, { pageParam, ...filters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const totalPages = lastPage.data.total_pages;
      if (totalPages === lastPageParam) {
        return undefined;
      }
      return lastPageParam + 1;
    }
  });
}

export function useDiscoverMoviesPaginated(page: number, filters?: DiscoverMoviesFilters) {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: ['discoverMovies', { page, ...filters }],
    queryFn: () => discoverMovies(axiosPrivate, { pageParam: page, ...filters }),
    placeholderData: keepPreviousData
  });
}

export function useGetMovieDetails(movieId: string) {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: ['movieDetails', { movieId }],
    queryFn: () => getMovieDetails(axiosPrivate, movieId)
  });
}

export function useGetGenres() {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: ['movieGenres'],
    queryFn: () => getMovieGenres(axiosPrivate)
  });
}

export function useSearchMovies(query: string) {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: ['searchMovies', { query }],
    queryFn: () => searchMovies(axiosPrivate, query)
  });
}

///

/* export function useAddMovieToFavorite() {
  const axiosPrivate = useAxiosPrivate();

  const addToFavorite = async (movieBody) => {
    const res = await axiosPrivate.post('/movies/favorites', { ...movieBody }, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    });
    return res.data;
  }

  return useMutation({
    mutationFn: addToFavorite,
    onSettled: (data) => {console.log('Soy on settled', data)}
  });
} */