import ArticleCards from "./ArticleCards";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Box } from "@mui/material";

export default function ArticleList({ articleList, topic }) {
  return (
    <Container id="article-list-container">
      <Box className="article-list-box">
        {topic ? (
          <h5>
            {topic[0].toUpperCase() +
              topic.slice(1, topic.length).toLowerCase()}{" "}
            Articles
          </h5>
        ) : (
          <h5>10 latest articles</h5>
        )}
      </Box>
      <Grid className="article-list-grid" xs={12}>
        <ol id="article-list">
          {articleList.map((article, i) => {
            return <ArticleCards key={i} article={article} />;
          })}
        </ol>
      </Grid>{" "}
    </Container>
  );
}
