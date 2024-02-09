import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function SwitchUser() {
  const { username, setLoggedInUser, avatar_url } = useContext(UserContext);

  return <p>hello</p>;
}
