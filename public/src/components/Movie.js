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

export const Movie = ({ imdbID, Title, Year, Poster, Type }) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      sm={3}
      md={2}
      sx={{ m: 1, position: "relative" }}
    >
      <CardMedia image={Poster} title={Title} component="img" />
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
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Grid>
  );
};
