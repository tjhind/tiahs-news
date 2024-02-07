import { Box, Select, MenuItem, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function SortByList({
  topicList,
  setSortTopic,
  setSortBy,
  sort_by,
  setSortOrder,
}) {
  return (
    <Container id="sortby-list-container">
      <Grid id="sort-by-grid" xs={6} md={6}>
        <Box className="sort-by-box">
          <h2>Sort by:</h2>
          <Select
            value={sort_by || "created_at"}
            sx={{
              marginTop: 0,
              width: 250,
              height: 50,
            }}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
            className="sort-by-dropdown"
          >
            <MenuItem value="created_at">Default: Date</MenuItem>
            <MenuItem value="author">Author</MenuItem>
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="votes">Votes</MenuItem>
            <MenuItem value="comment_count">Comments</MenuItem>
          </Select>
        </Box>
        <Box className="sort-by-box">
          <h2>Topics:</h2>
          {topicList.map((topic, i) => {
            const topicName =
              topic.slug[0].toUpperCase() +
              topic.slug.slice(1, topic.length).toLowerCase();
            return (
              <button
                className="sortby-button"
                key={`topic${i}`}
                onClick={() => setSortTopic(topic.slug)}
              >
                {topicName}
              </button>
            );
          })}
        </Box>
        <Box className="sort-by-box">
          <h2>Order by:</h2>
          <button
            className="sortby-button"
            key="order2"
            onClick={() => setSortOrder("desc")}
          >
            {sort_by === "created_at" || !sort_by
              ? "Default: Newest first"
              : sort_by === "votes"
              ? "Most to least votes"
              : "Z-A"}
          </button>
          <button
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
          </button>
        </Box>
      </Grid>
    </Container>
  );
}
