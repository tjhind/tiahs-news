import { Container } from "@mui/material";
import { getTenArticles } from "../utils/get";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import SortByList from "./SortByList";
import Grid from '@mui/material/Unstable_Grid2'

export default function HomepageManager() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getTenArticles().then((response) => {
      setArticleList(response);
    });
  }, []);

  
  return (
    <Grid container spacing={2}className="homepage-container">
      <SortByList />
      <ArticleList articleList={articleList} />
    </Grid>
  );
}
