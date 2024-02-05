import { Box } from "@mui/material";
import ArticleCards from "./ArticleCards";
import { Typography } from "@mui/material";

export default function ArticleList({ articleList }) {
  return (
    <Box className="article-list-container">
      <Typography variant="h5">10 latest articles</Typography>
      <ol id="article-list">
        {articleList.map((article, i) => {
          return <ArticleCards key={i} article={article} />;
        })}
      </ol>
    </Box>
  );
}
