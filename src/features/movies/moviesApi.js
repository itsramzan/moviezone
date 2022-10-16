import apiSlice from "../api/apiSlice";

const moviesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ type, search, genre, page }) => {
        let url = null;

        if (type)
          url = `movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;
        if (search)
          url = `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&include_adult=false&query=${search}`;
        if (genre)
          url = `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genre}&page=${page}`;

        return {
          url,
          method: "GET",
        };
      },
      keepUnusedDataFor: 3600,
    }),
    getMovie: builder.query({
      query: ({ id }) => ({
        url: `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getGenre: builder.query({
      query: () => ({
        url: `genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getRelatedMovies: builder.query({
      query: ({ id }) => ({
        url: `movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
  }),
});

export default moviesApi;
export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetGenreQuery,
  useGetRelatedMoviesQuery,
} = moviesApi;
