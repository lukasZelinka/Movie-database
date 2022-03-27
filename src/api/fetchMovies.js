const fetchMovies = async (inputValue, page) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=79f23987&s=${inputValue}&page=${page}`
  );
  const fullData = await response.json();
  const movies = fullData.Search;
  if (!movies) {
    throw new Error("error");
  }
  return movies;
};

export { fetchMovies };
