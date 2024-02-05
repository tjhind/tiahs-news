import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HomepageManager from "../components/HomepageManager";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomepageManager />} />
          <Route path="articles/:article_id" element={<IndividualArticle />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
