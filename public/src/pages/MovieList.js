//react
import React from "react";
//mui
import { Typography, Container, Grid } from "@mui/material";
//redux
import { connect } from "react-redux";
//local
import { Movie } from "../components/Movie";
import Loader from "../components/Loading";

const MovieList = ({ loading, movies = [], hasErrors }) => {
  //display movies
  const displayMovies = () => {
    if (loading) return <Loader />;
    if (hasErrors) return <p>Unable to display movies.</p>;
    console.log(movies);
    return movies.map((movie) => <Movie key={movie.imdbID} {...movie} />);
  };

  if (movies.length === 0) {
    return (
      <>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ m: 3 }}
          >
            Welcome to our Movie database
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Please enter a movie name in the search bar. Then press "enter" or
            click on the search icon. Your movies will display on your screen.
          </Typography>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
          sx={{ m: 5 }}
        >
          Movies
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ pb: 5 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {displayMovies()}
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movies: state.movies.movies,
  hasErrors: state.movies.hasErrors,
});
export default connect(mapStateToProps)(MovieList);

// to map = rozdelit
