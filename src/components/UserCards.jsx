import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
export default function UserCards({ user }) {
  const { setLoggedInUser, loggedInUser } = useContext(UserContext);
  const username = user.username;
  const avatarImg = user.avatar_url;
  return (
    <Grid
      id="user-card"
      item={true}
      lg={3}
      align="center"
      xl={3}
      md={4}
      sm={6}
      xs={12}
    >
      <Card sx={{ width: 300, height: 250, mb: 4, p: 4 }}>
        <CardActionArea
          onClick={() => {
            setLoggedInUser({ username: username, avatar_url: avatarImg });
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={user.avatar_url}
            id={"avatar2"}
            alt={`profile photo for user ${user}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              fontWeight={500}
              tcomponent="div"
            >
              {user.name}
            </Typography>
          </CardContent>
        </CardActionArea>{" "}
        <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
          {user.username}
        </Typography>
      </Card>{" "}
    </Grid>
  );
}
