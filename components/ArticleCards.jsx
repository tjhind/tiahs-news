import { Box, Typography, Button } from "@mui/material";

export default function ArticleCards({ article }) {
  return (
    <Box className="article-box">
      <Typography variant="h4">
        <p className="title">{article.title}</p>
      </Typography>
      <Typography variant="h6">
        <p className="author">{article.author}</p>
      </Typography>
      <Button variant="contained">Read More</Button>
    </Box>
  );
}
