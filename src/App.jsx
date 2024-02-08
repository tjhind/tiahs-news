import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomepageManager from "./components/HomepageManager";
import { Container, CssBaseline } from "@mui/material";
import IndividualArticle from "./components/IndividualArticle";
import NonexistentPath from "./components/NonexistentPath";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ username: "grumpy19" });

  return (
    <>
      <CssBaseline>
        <Container id="page-container">
          <UserContext.Provider
            value={{ username: loggedInUser.username, setLoggedInUser }}
          >
            <Header />
            <NavBar />
            <Routes>
              <Route path="/" element={<HomepageManager />} />
              <Route
                path="/articles/:article_id"
                element={<IndividualArticle />}
              />
              <Route path="*" element={<NonexistentPath />} />
            </Routes>
          </UserContext.Provider>
        </Container>
      </CssBaseline>
    </>
  );
}

export default App;
