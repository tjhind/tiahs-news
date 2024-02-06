import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const loggedInUser = useContext(UserContext);
  return (
    <nav>
      <Link
        to={`/`}
        key="Home-link"
        onClick={() => (window.location.href = "/")}
      >
        Home
      </Link>
      <p>
        Current User:
        {loggedInUser.username}
      </p>
    </nav>
  );
}
