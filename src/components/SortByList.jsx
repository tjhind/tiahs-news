import { Box, Select, MenuItem, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function SortByList({
  topicList,
  setSortTopic,
  setSortBy,
  sort_by,
  setSortOrder,
}) {
  return (
    <Container id="sortby-list-container">
      <Grid container spacing={2} justify="center" id="sort-by-grid">
        <Grid item="true" className="sort-by-box">
          <h2>Sort by:</h2>
          <Select
            variant="outlined"
            value={sort_by || "created_at"}
            sx={{
              marginTop: 0,
              width: 250,
              height: 40,
              boxShadow: 5,
            }}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
            className="sort-by-dropdown"
          >
            <MenuItem value="created_at">Default: date</MenuItem>
            <MenuItem value="author">Author</MenuItem>
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="votes">Votes</MenuItem>
            <MenuItem value="comment_count">Comments</MenuItem>
          </Select>
        </Grid>
        <Grid item="true" className="sort-by-box">
          <h2>Topics:</h2>
          <ButtonGroup
            variant="outlined"
            aria-label="Basic button group"
            sx={{
              marginTop: 0,
              width: 250,
              height: 40,
              boxShadow: 5,
            }}
          >
            {topicList.map((topic, i) => {
              const topicName =
                topic.slug[0].toUpperCase() +
                topic.slug.slice(1, topic.length).toLowerCase();
              return (
                <Button
                  className="sortby-button"
                  key={`topic${i}`}
                  onClick={() => setSortTopic(topic.slug)}
                >
                  {topicName}
                </Button>
              );
            })}{" "}
          </ButtonGroup>
        </Grid>
        <Grid item="true" className="sort-by-box">
          <h2>Order by:</h2>
          <ButtonGroup
            variant="outlined"
            aria-label="Basic button group"
            sx={{ boxShadow: 5, height: 40 }}
          >
            <Button
              className="sortby-button"
              key="order2"
              onClick={() => setSortOrder("desc")}
            >
              {sort_by === "created_at" || !sort_by
                ? "Default: Newest first"
                : sort_by === "votes"
                ? "Most to least votes"
                : "Z-A"}
            </Button>
            <Button
              className="sortby-button"
              key="order1"
              onClick={() => setSortOrder("asc")}
            >
              {" "}
              {sort_by === "created_at" || !sort_by
                ? "Oldest First"
                : sort_by === "votes"
                ? "Least to most votes"
                : "A-Z"}
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
}
