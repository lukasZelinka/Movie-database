import React, { useEffect, useState } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { connect } from "react-redux";
import { Movie } from "../components/Movie";
import Loader from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadInfiniteMovies, setSearchShow } from "../actions/index";

const MoviesList = ({
  movies = [],
  infiniteMovies,
  isLoading,
  error,
  loadInfiniteMovies,
  setSearchShow,
}) => {
  useEffect(() => setSearchShow(), []);

  const displayMovies = () => {
    // if (isLoading) return <Loader />;
    return movies.map((movie, index) => <Movie key={index} {...movie} />);
  };
  const displayInfiniteMovies = () => {
    return infiniteMovies.map((movie, index) => (
      <Movie key={index} {...movie} />
    ));
  };
  // infinite scroll
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    loadInfiniteMovies();
  };

  useEffect(() => {
    if (infiniteMovies.length % 10 === 0) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [infiniteMovies]);

  useEffect(() => {
    if (movies.length < 10) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [movies]);

  if (error)
    return (
      <>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ m: 4 }}
          >
            Movie Database
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            No match
          </Typography>
        </Container>
      </>
    );

  if (isLoading) return <Loader />;
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
            Movie database
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Please type the name of the movie.
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
          sx={{ m: 5, mb: 0 }}
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
      <InfiniteScroll
        dataLength={infiniteMovies.length}
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
            {displayInfiniteMovies()}
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
  infiniteMovies: state.moviesReducer.infiniteMovies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadInfiniteMovies: () => dispatch(loadInfiniteMovies()),
    setSearchShow: () => dispatch(setSearchShow()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
