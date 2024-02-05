import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ArticleCards({ article }) {
  return (
    <Box className="article-box">
      <Typography variant="h4">
        <p className="title">{article.title}</p>
      </Typography>
      <Typography variant="h6">
        <p className="author">{article.author}</p>
      </Typography>
      <Link to={`/articles/${article.article_id}`}>
        <Button variant="contained">Read More</Button>
      </Link>
    </Box>
  );
}
