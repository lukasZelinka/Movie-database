//  action types
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";
//  action creators
export const getMovies = () => ({
  type: GET_MOVIES,
});
export const getMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});
export const getMoviesFailure = () => ({
  type: GET_MOVIES_FAILURE,
});
// async
export function fetchMovies(name) {
  return async (dispatch) => {
    dispatch(getMovies());
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${name}`
        // `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=batman&page=2`
      );
      const data = await response.json();
      dispatch(getMoviesSuccess(data.Search));
    } catch (error) {
      dispatch(getMoviesFailure());
    }
  };
}
