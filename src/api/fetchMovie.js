const fetchMovie = async (id) => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=79f23987`
  );
  const movie = await response.json();
  return movie;
};

export { fetchMovie };
