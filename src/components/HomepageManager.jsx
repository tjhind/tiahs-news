import { Container } from "@mui/material";
import { getTenArticles } from "../utils/get";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

export default function HomepageManager() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getTenArticles().then((response) => {
      setArticleList(response);
    });
  }, []);
  return (
      <ArticleList articleList={articleList} />
  );
}
