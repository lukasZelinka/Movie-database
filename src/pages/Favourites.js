import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "../components/Loading";
import {
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { setSearchHide } from "../actions/index";

const Favourites = ({ favourites = [], setSearchHide }) => {
  useEffect(() => setSearchHide(), []);
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
          Favourites
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ pb: 5 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {favourites.map((favourite, index) => {
            const { imdbID, Title, Year, Poster } = favourite;
            return (
              <Grid
                key={index}
                item
                component={Card}
                xs={12}
                sm={3}
                md={2}
                sx={{ m: 1, position: "relative" }}
              >
                <CardMedia
                  image={
                    Poster === "N/A"
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYgA26QvIGAR69KBJPs8BF3QKdiNzXIv7Xg&usqp=CAU"
                      : Poster
                  }
                  title={Title}
                  component="img"
                />
                <CardContent sx={{ mb: 4 }}>
                  <Typography
                    gutterBottom
                    variant="body1"
                    align="center"
                    sx={{ fontWeight: "bold" }}
                  >
                    {Title}
                  </Typography>
                  <Typography align="center">{Year}</Typography>
                </CardContent>
                <CardActions
                  sx={{ position: "absolute", bottom: "0.2em", left: "0.2em" }}
                >
                  <Link to={`/movie/${imdbID}`}>
                    <Button size="small" color="primary">
                      Movie detail
                    </Button>
                  </Link>
                </CardActions>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  favourites: state.favouritesReducer.favourites,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchHide: () => dispatch(setSearchHide()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
