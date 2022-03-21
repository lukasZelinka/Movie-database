import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Movie = ({ imdbID, Title, Year, Poster }) => {
  return (
    <Grid
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
};
