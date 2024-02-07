import { getAllArticles, getAllTopics } from "../utils/get";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import SortByList from "./SortByList";
import Grid from "@mui/material/Unstable_Grid2";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";

export default function HomepageManager() {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topicList, setTopicList] = useState([]);
  const [topicSearchTerm, setTopicSearchTerm] = useSearchParams();
  const [sortByTerm, setSortByTerm] = useSearchParams();
  const sortByList = ["Title", "Author" ]

  const limit = "10";
  const topic = topicSearchTerm.get("topic");
  const sort_by = sortByTerm.get("sort_by");

  const setSortTopic = (topic) => {
    const newTopicTerm = new URLSearchParams(topicSearchTerm);
    newTopicTerm.set("topic", topic);
    setTopicSearchTerm(newTopicTerm);
  };

  const setSortBy = (sort_by) => {
    const newSortBy = new URLSearchParams(searchTerm);
    newSortBy.set("sort_by", sort_by);
    setSortByTerm(newSortBy);
  };

  useEffect(() => {
    getAllTopics().then((response) => {
      setTopicList(response);
      setLoading(false);
    });
  }, [articleList]);

  useEffect(() => {
    getAllArticles(limit, topic, sort_by).then((response) => {
      setArticleList(response);
      setLoading(false);
    });
  }, [topic]);

  if (loading) return <Loading />;

  return (
    <Grid container spacing={2} className="homepage-container">
      <SortByList topicList={topicList} setSortTopic={setSortTopic} />
      <ArticleList articleList={articleList} topic={topic} />
    </Grid>
  );
}
