import { useEffect, useState } from "react";
import { getArticleById } from "../utils/get";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CommentList from "./CommentList";
import { getCommentsById } from "../utils/get";
import ArticleVotes from "./ArticleVotes";
import CommentAdder from "./CommentAdder";
export default function IndividualArticle() {
  const [articleDetails, setArticleDetails] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticleDetails(response);
    });
  }, [article_id || articleDetails.votes || articleDetails.comment_count]);

  useEffect(() => {
    getCommentsById(article_id).then((response) => {
      setCommentsList(response);
    });
  }, [commentsList]);

  return (
    <Box className="individual-article-container">
      <Box className="individual-article-box">
        <Typography variant="h4">
          <>{articleDetails.title}</>
        </Typography>
      </Box>{" "}
      <Box className="individual-article-box">
        <img
          src={articleDetails.article_img_url}
          alt={`stock image to do with ${articleDetails.topic}`}
        ></img>
      </Box>
      <Box className="individual-article-box">
        <Typography variant="h6">
          <>{articleDetails.body}</>
        </Typography>
      </Box>
      <Box className="individual-article-box">
        <Typography variant="h6">
          <>Author: {articleDetails.author}</>
        </Typography>
      </Box>
      <Box className="individual-article-box">
        <Typography>
          <>Comments: {articleDetails.comment_count}</>
        </Typography>
      </Box>
      <ArticleVotes articleId={article_id} votes={articleDetails.votes} />
      <CommentAdder
        articleId={article_id}
        setCommentsList={setCommentsList}
        commentsList={commentsList}
      />
      <CommentList commentsList={commentsList} />
    </Box>
  );
}
