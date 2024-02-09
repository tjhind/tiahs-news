import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import HomepageManager from "./components/HomepageManager";
import { Container, CssBaseline } from "@mui/material";
import IndividualArticle from "./components/IndividualArticle";
import NonexistentPath from "./components/NonexistentPath";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import SwitchUser from "./components/SwitchUser";
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });

  return (
    <>
      <Wrapper>
        <CssBaseline>
          <Container id="page-container" maxWidth="xl" sx={{ boxShadow: 1 }}>
            <UserContext.Provider
              value={{
                username: loggedInUser.username,
                avatar_url: loggedInUser.avatar_url,
                setLoggedInUser,
              }}
            >
              <Header />
              <NavBar />
              <Routes>
                <Route path="/" element={<HomepageManager />} />
                <Route
                  path="/articles/:article_id"
                  element={<IndividualArticle />}
                />
                <Route path="/switchuser" element={<SwitchUser />} />
                <Route path="*" element={<NonexistentPath />} />
              </Routes>
            </UserContext.Provider>
          </Container>
        </CssBaseline>
      </Wrapper>
    </>
  );
}

export default App;
