import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function SortByList() {
  return (
    <Grid xs={12} md={6}>
      <Box className="sort-by-box">SortBy List</Box>
      <Box className="sort-by-box">SortBy Price</Box>
    </Grid>
  );
}
