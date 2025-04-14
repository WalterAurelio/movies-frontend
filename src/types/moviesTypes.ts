import type { paths } from '../schemas/schema';

// Discover Movies Response
export type DiscoverMoviesResponse = paths['/3/discover/movie']['get']['responses'][200]['content']['application/json'];

// Discover Movie (estructura de solo una película)
type DiscoverMovieResults = paths['/3/discover/movie']['get']['responses'][200]['content']['application/json']['results'];
type ExtractFromArray<T> = T extends Array<infer U> ? U : never;
export type DiscoverMovie = ExtractFromArray<DiscoverMovieResults>;

// Movie Details
export type MovieDetails = paths['/3/movie/{movie_id}']['get']['responses'][200]['content']['application/json'];

// Movie Details Videos
export type MovieVideos = paths['/3/movie/{movie_id}/videos']['get']['responses'][200]['content']['application/json'];

// Discover Movies Filters
type DiscoverMoviesFiltersNull = paths['/3/discover/movie']['get']['parameters']['query'];
export type DiscoverMoviesFilters = NonNullable<DiscoverMoviesFiltersNull>;

// Movie Genres List
export type MoviesGenres = paths['/3/genre/movie/list']['get']['responses'][200]['content']['application/json'];

// Search Movie Results
export type SearchMovies = paths['/3/search/movie']['get']['responses'][200]['content']['application/json'];
