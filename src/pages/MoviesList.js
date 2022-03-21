import React, { useEffect, useState } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { connect } from "react-redux";
import { Movie } from "../components/Movie";
import Loader from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadMovies } from "../actions/index";

const MoviesList = ({ movies = [], isLoading, error, loadMovies }) => {
  // infinite scroll
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (movies.length % 10 === 0) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [movies]);

  const fetchData = () => {
    loadMovies();
  };

  const displayMovies = () => {
    if (isLoading) return <Loader />;
    return movies.map((movie, index) => <Movie key={index} {...movie} />);
  };

  if (error) return <p>Unable to display movies.</p>;
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
        ></Grid>
      </Container>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchData}
        hasMore={hasMore}
        loader={
          <h4>
            <Loader />
          </h4>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
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
      </InfiniteScroll>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
  movies: state.moviesReducer.movies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: () => dispatch(loadMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
