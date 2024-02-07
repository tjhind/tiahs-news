import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function NavBar() {
  const loggedInUser = useContext(UserContext);
  return (
    <Container id="nav-bar">
      <Grid id="sort-by-grid" xs={6} md={6}>
        <Box className="navBar">
          <Link
            to={`/`}
            key="Home-link"
            // onClick={() => (window.location.href = "/")}
          >
            Home
          </Link>
        </Box>
        <Box className="nav-bar">
          <p id="current-user">Current User: </p>{" "}
          <p id="logged-in-user">{` ${loggedInUser.username}`}</p>
        </Box>
      </Grid>
    </Container>
  );
}
