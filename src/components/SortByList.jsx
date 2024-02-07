import { Box, Select, MenuItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function SortByList({
  topicList,
  setSortTopic,
  setSortBy,
  sort_by,
  order,
  setSortOrder,
}) {
  return (
    <Grid xs={12} md={6}>
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
          className="select-sort-by"
        >
          <MenuItem value="created_at">Default: Date (most recent)</MenuItem>
          <MenuItem value="author">Author</MenuItem>
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
          <MenuItem value="comment_count">Comments</MenuItem>
        </Select>
      </Box>
      <Box className="topics-box">
        <h2>Topics:</h2>
        {topicList.map((topic, i) => {
          const topicName =
            topic.slug[0].toUpperCase() +
            topic.slug.slice(1, topic.length).toLowerCase();
          return (
            <button
              className="topic-button"
              key={`topic${i}`}
              onClick={() => setSortTopic(topic.slug)}
            >
              {topicName}
            </button>
          );
        })}
      </Box>
      <Box className="order-box">
        <h2>Order by:</h2>
        <button
          className="topic-button"
          key="order1"
          onClick={() => setSortOrder("asc")}
        >
          Ascending
        </button>
        <button
          className="topic-button"
          key="order2"
          onClick={() => setSortOrder("desc")}
        >
          Descending
        </button>
      </Box>
    </Grid>
  );
}
