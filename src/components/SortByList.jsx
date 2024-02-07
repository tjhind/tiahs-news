import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function SortByList({
  topicList,
  setSortTopic,
  setSortBy,
  sortByList,
}) {
  return (
    <Grid xs={12} md={6}>
      <Box className="sort-by-box">
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
        <>
          <h2 key="sortByHeader">Sort By:</h2>{" "}
          <button
            className="sort-by-button"
            key="sortBy4"
            onClick={() => setSortBy(sortByList[3])}
          >
            Default: Date Written
          </button>
          <button
            className="sort-by-button"
            key="sortBy1"
            onClick={() => setSortBy(sortByList[0])}
          >
            Title
          </button>
          <button
            className="sort-by-button"
            key="sortBy2"
            onClick={() => setSortBy(sortByList[1])}
          >
            Author
          </button>
          <button
            className="sort-by-button"
            key="sortBy3"
            onClick={() => setSortBy(sortByList[2])}
          >
            Topic
          </button>
          <button
            className="sort-by-button"
            key="sortBy5"
            onClick={() => setSortBy(sortByList[4])}
          >
            Votes
          </button>
          <button
            className="sort-by-button"
            key="sortBy6"
            onClick={() => setSortBy(sortByList[5])}
          >
            Comment count
          </button>
        </>
      </Box>
    </Grid>
  );
}
