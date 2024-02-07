import ArticleCards from "./ArticleCards";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";

export default function ArticleList({ articleList, topic }) {
  return (
    <>
      <Container maxWidth="sm" className="article-list-title">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {" "}
          {topic ? (
            <h5>
              {topic[0].toUpperCase() +
                topic.slice(1, topic.length).toLowerCase()}{" "}
            </h5>
          ) : (
            <h5>10 latest articles</h5>
          )}{" "}
        </Typography>
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
