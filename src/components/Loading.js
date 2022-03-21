import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";

export default function CircularIndeterminate() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 30 }}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}
