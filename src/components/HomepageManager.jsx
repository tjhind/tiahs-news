import { getTenArticles } from "../utils/get";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import SortByList from "./SortByList";
import Grid from "@mui/material/Unstable_Grid2";
import Loading from "./Loading";

export default function HomepageManager() {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTenArticles().then((response) => {
      setArticleList(response);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <Grid container spacing={2} className="homepage-container">
      <SortByList />
      <ArticleList articleList={articleList} />
    </Grid>
  );
}
