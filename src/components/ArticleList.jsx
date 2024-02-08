import ArticleCards from "./ArticleCards";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";

export default function ArticleList({ articleList, topic }) {
  return (
    <>
      <Container maxWidth="sm" className="article-list-title">
        {" "}
        {topic ? (
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ padding: 5 }}
          >
            {topic[0].toUpperCase() +
              topic.slice(1, topic.length).toLowerCase()}{" "}
          </Typography>
        ) : (
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ padding: 5 }}
          >
            10 latest articles
          </Typography>
        )}{" "}
      </Container>
      <Grid className="article-list-grid">
        <ol id="article-list">
          {articleList.map((article, i) => {
            return <ArticleCards key={i} article={article} />;
          })}
        </ol>
      </Grid>{" "}
    </>
  );
}
