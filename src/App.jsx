import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomepageManager from "./components/HomepageManager";
import { Container } from "@mui/material";
import IndividualArticle from "./components/IndividualArticle";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ username: null });

  return (
    <>
      <Container className="page-container">
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
          </Routes>
        </UserContext.Provider>
      </Container>
    </>
  );
}

export default App;
