import React, { useEffect } from "react";
import Loader from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import {
  loadMovie,
  saveId,
  addFavouriteMovie,
  deleteFavouriteMovie,
  setStarTrue,
  setStarFalse,
} from "../actions";
import { connect } from "react-redux";
import { setSearchHide } from "../actions/index";
import { Grid, Box, Typography, Button } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleMovie = ({
  loadMovie,
  saveId,
  movie,
  isLoading,
  error,
  star,
  addFavouriteMovie,
  deleteFavouriteMovie,
  favourites,
  setStarTrue,
  setStarFalse,
  setSearchHide,
}) => {
  const { id } = useParams();
  const { Poster, Title, Genre, Runtime, Plot, Writer, Year, Actors } = movie;

  useEffect(() => {
    setSearchHide();
    saveId(id);
    loadMovie(id);
  }, []);

  useEffect(() => {
    setStarTrue();
    favourites.map((item) => {
      if (item.imdbID === id) {
        setStarFalse();
      }
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <p>Unable to display movies.</p>;
  } else {
    return (
      <>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ height: { sm: "90vh" } }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    height: { sm: "100%" },
                  }}
                >
                  <Grid item sx={{ mt: { xs: 2, sm: 0 } }}>
                    <img
                      src={
                        Poster === "N/A"
                          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYgA26QvIGAR69KBJPs8BF3QKdiNzXIv7Xg&usqp=CAU"
                          : Poster
                      }
                      alt="picture of movie"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ height: { sm: "90vh" } }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  sx={{ height: { sm: "100%" } }}
                >
                  <Grid item sx={{ p: 2 }}>
                    <Box className="stars">
                      {star ? (
                        <AiOutlineStar
                          onClick={() => addFavouriteMovie(movie)}
                        />
                      ) : (
                        <AiFillStar
                          onClick={() => deleteFavouriteMovie(movie)}
                        />
                      )}
                    </Box>
                    <Typography variant="body1">
                      {" "}
                      <span className="bold">Title: </span> {Title}{" "}
                    </Typography>
                    <Typography variant="body1">
                      <span className="bold">Genre: </span> {Genre}
                    </Typography>
                    <Typography variant="body1">
                      <span className="bold">Year: </span> {Year}
                    </Typography>
                    <Typography variant="body1">
                      <span className="bold">Time: </span> {Runtime}
                    </Typography>
                    <Typography variant="body1">
                      <span className="bold">Writer: </span> {Writer}
                    </Typography>
                    <Typography variant="body1">
                      <span className="bold">Actors: </span> {Actors}
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: "20em" }}>
                      <span className="bold">About: </span> {Plot}
                    </Typography>
                    <p>
                      <Link to="/">
                        <Button size="small" color="primary">
                          movies
                        </Button>
                      </Link>
                      <Link to="/favourites">
                        <Button size="small" color="primary" sx={{ ml: 2 }}>
                          favourites
                        </Button>
                      </Link>
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
  movie: state.movieReducer.movie,
  star: state.favouritesReducer.star,
  favourites: state.favouritesReducer.favourites,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovie: () => dispatch(loadMovie()),
    saveId: (id) => dispatch(saveId(id)),
    addFavouriteMovie: (movie) => dispatch(addFavouriteMovie(movie)),
    deleteFavouriteMovie: (movie) => dispatch(deleteFavouriteMovie(movie)),
    setStarFalse: () => dispatch(setStarFalse()),
    setStarTrue: () => dispatch(setStarTrue()),
    setSearchHide: () => dispatch(setSearchHide()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
