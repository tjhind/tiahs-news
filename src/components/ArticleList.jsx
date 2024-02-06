import ArticleCards from "./ArticleCards";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Loading from "./Loading";
import { useState } from "react";

export default function ArticleList({ articleList }) {
  return (
    <>
      <Grid xs={4}>
        {" "}
        <Typography variant="h5">10 latest articles</Typography>
      </Grid>{" "}
      <ol id="article-list">
        {articleList.map((article, i) => {
          return <ArticleCards key={i} article={article} />;
        })}
      </ol>
    </>
  );
}
