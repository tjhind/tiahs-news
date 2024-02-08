import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeedIcon from "@mui/icons-material/Feed";
export default function NavBar() {
  const loggedInUser = useContext(UserContext);

  return (
    <AppBar position="relative">
      <Toolbar>
        <FeedIcon sx={{ mr: 1 }} />
        <Link
          id="home-link"
          key="Home-link"
          onClick={() => (window.location.href = "/")}
        >
          <Typography variant="h6" fontWeight={400}>
            Home{" "}
          </Typography>
        </Link>
        <AccountCircleIcon />
        <Typography fontWeight={350} sx={{ ml: 15 }} variant="h6">
          {" "}
          Current User: {` ${loggedInUser.username}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
