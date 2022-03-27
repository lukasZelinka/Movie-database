const fetchMovies = async (inputValue, page) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${inputValue}&page=${page}`
  );
  const fullData = await response.json();
  const movies = fullData.Search;
  if (!movies) {
    throw new Error("error");
  }
  return movies;
};

export { fetchMovies };
