import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

export default function CircularIndeterminate() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}
