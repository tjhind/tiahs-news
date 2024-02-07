import ArticleCards from "./ArticleCards";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Loading from "./Loading";
import { useState } from "react";

export default function ArticleList({ articleList, topic }) {
  return (
    <>
      <Grid xs={4}>
        {" "}
        {topic ? (
          <Typography variant="h5">
            {topic[0].toUpperCase() +
              topic.slice(1, topic.length).toLowerCase()}{" "}
            Articles
          </Typography>
        ) : (
          <Typography variant="h5">10 latest articles</Typography>
        )}
      </Grid>{" "}
      <ol id="article-list">
        {articleList.map((article, i) => {
          return <ArticleCards key={i} article={article} />;
        })}
      </ol>
    </>
  );
}
