import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Typography, Grid } from "@mui/material";

export default function Loading({ loading }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        {" "}
        <Typography variant="h4">Loading, Please Wait</Typography>{" "}
      </Grid>{" "}
      <Grid item xs={3}>
        {" "}
        <ClipLoader
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Grid>
    </Grid>
  );
}
