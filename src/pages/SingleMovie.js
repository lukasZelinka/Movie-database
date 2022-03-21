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
}) => {
  const { id } = useParams();
  const { Poster, Title, Genre, Runtime, Plot, Writer, Year, Actors } = movie;

  useEffect(() => {
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ height: "90vh" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: "100%" }}
                >
                  <Grid item>
                    <img src={Poster} alt="picture of movie" />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ height: "90vh" }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  sx={{ height: "100%" }}
                >
                  <Grid item>
                    <Typography variant="body1">
                      {" "}
                      <span className="bold">Title: </span> {Title}{" "}
                      <span className="stars">
                        {star ? (
                          // <span className="iconWrapper">
                          // <span className="iconStar">
                          <AiOutlineStar
                            onClick={() => addFavouriteMovie(movie)}
                          />
                        ) : (
                          // </span>
                          // </span>
                          // <span className="iconWrapper">
                          // <span className="iconStar">
                          <AiFillStar
                            onClick={() => deleteFavouriteMovie(movie)}
                          />
                          // </span>
                          // </span>
                        )}
                      </span>
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
                          back home
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
