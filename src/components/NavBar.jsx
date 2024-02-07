import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FeedIcon from "@mui/icons-material/Feed";
export default function NavBar() {
  const loggedInUser = useContext(UserContext);
  return (
    <AppBar position="relative">
      <Toolbar>
        <FeedIcon />
        <Link
          to={`/`}
          key="Home-link"
          // onClick={() => (window.location.href = "/")}
        >
          <Typography variant="h6">Home </Typography>
        </Link>
        <Typography sx={{ ml: 15 }} variant="h6">
          {" "}
          Current User: {` ${loggedInUser.username}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
