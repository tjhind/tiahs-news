import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function SortByList({
  topicList,
  setSortTopic,
  setSortBy,
  sortByList,
  sort_by,
}) {
  return (
    <Grid xs={12} md={6}>
      <Box className="sort-by-box">SortBy List</Box>
      <h2>Categories:</h2>
      <ul>
        {topicList.map((topic, i) => {
          const topicName =
            topic.slug[0].toUpperCase() +
            topic.slug.slice(1, topic.length).toLowerCase();
          return (
            <>
              {" "}
              <button
                className="topic-button"
                key={i}
                onClick={() => setSortTopic(topic.slug)}
              >
                {topicName}
              </button>
            </>
          );
        })}

      </ul>
      <Box className="sort-by-box">SortBy Price</Box>
    </Grid>
  );
}
