import axios from '../api/axios';
import { SignUpBody } from '../pages/SignUp';
import { LogInBody } from '../interfaces/LogInForm';
import { DiscoverMoviesResponse, DiscoverMoviesFilters, MovieDetails, MovieVideos, MoviesGenres, SearchMoviesResponse } from '../types/moviesTypes';
import { AxiosInstance } from 'axios';
import { ApiResponse, LogInResponse } from '../types/apiResponse';

// User
export const signUp = async (body: SignUpBody) => {
  const res = await axios.post('api/auth/register', body);
  return res.data;
};

export const logIn = async (body: LogInBody) => {
  const res = await axios.post<LogInResponse>('/api/auth/login', body, {
    withCredentials: true
  });
  return res.data;
};

export const logOut = async (axiosInstance: AxiosInstance) => {
  const res = await axiosInstance.get('api/auth/logout');
  return res.data;
}

// Movies
export const discoverMovies = async (axiosInstance: AxiosInstance, { pageParam, ...filters }: { pageParam: number }) => {
  const res = await axiosInstance.get<ApiResponse<DiscoverMoviesResponse>>('/movies/discover', {
    params: { page: pageParam, ...filters } as DiscoverMoviesFilters
  });
  return res.data;
};

export const getMovieDetails = async (axiosInstance: AxiosInstance, movieId: string) => {
  const res = await axiosInstance.get<ApiResponse<MovieDetails>>(`/movies/movie/${movieId}`);
  return res.data;
};

export const getMovieVideos = async (axiosInstance: AxiosInstance, movieId: string) => {
  const res = await axiosInstance.get<ApiResponse<MovieVideos>>(`/movies/videos/${movieId}`);
  return res.data;
}

export const getMovieGenres = async (axiosInstance: AxiosInstance) => {
  const res = await axiosInstance.get<ApiResponse<MoviesGenres>>('/movies/genres');
  return res.data;
};

export const searchMovies = async (axiosInstance: AxiosInstance, query: string) => {
  const res = await axiosInstance.get<ApiResponse<SearchMoviesResponse>>(`/movies/search?query=${query}`);
  return res.data;
};