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
    <AppBar position="relative" >
      <Toolbar className="my-toolbar" sx={{ boxShadow: 3 }}>
        <Link
          id="home-link"
          key="Home-link"
          onClick={() => (window.location.href = "/")}
        >
          <Typography variant="h6" fontWeight={400} className="home">
            HOME{" "}
          </Typography>
        </Link>

        <Typography
          fontWeight={400}
          sx={{ p: 0 }}
          variant="h6"
          className="user"
        >
          {" "}
          <Link to="/switchUser" className="user">
            {" "}
            HEY {` ${loggedInUser.username}`}!
          </Link>
          <Link to="/switchUser" className="user">
            <img id="avatar" src={loggedInUser.avatar_url} />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
