import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
export default function NavBar() {
  const loggedInUser = useContext(UserContext);

  return (
    <AppBar position="relative" sx={{ boxShadow: 3 }}>
      <Toolbar className="my-toolbar">
        <Link id="home-link" key="Home-link" to="/">
          <Typography xs={3} variant="h6" fontWeight={400} className="home">
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
            Hey {` ${loggedInUser.username}`}!
          </Link>
          <Link to="/switchUser" className="user">
            <img id="avatar" src={loggedInUser.avatar_url} />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
