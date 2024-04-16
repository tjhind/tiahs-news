import { getAllUsers } from "../utils/get";
import { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import UserCards from "./UserCards";
export default function SwitchUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUsers().then((response) => {
      setUserList(response);
    });
  }, []);
  return (
    <>
      {" "}
      <Typography variant="h4" align="center" sx={{ pt: 2 }}>
        Click on a profile to change user
      </Typography>
      <Grid
        container
        item={true}
        className="user-box"
        spacing={2}
        align="center"
        sx={{ pt: 6 }}
      >
        {userList.map((user, i) => {
          return <UserCards key={i} user={user} />;
        })}
      </Grid>
    </>
  );
}
