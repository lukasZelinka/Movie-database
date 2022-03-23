const setLocalStorage = (favourites) => {
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

const getLocalStorage = () => {
  let favourites = localStorage.getItem("favourites");
  if (favourites) {
    return (favourites = JSON.parse(localStorage.getItem("favourites")));
  } else {
    return [];
  }
};

export { setLocalStorage, getLocalStorage };
