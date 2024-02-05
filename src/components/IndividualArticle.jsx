import { useEffect, useState } from "react";
import { getArticleById } from "../utils/get";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CommentList from "./CommentList";
import { getCommentsById } from "../utils/get";

export default function IndividualArticle() {
  const [articleDetails, setArticleDetails] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticleDetails(response);
    });
  }, [article_id]);

  const [commentsList, setCommentsList] = useState([]);
  useEffect(() => {
    getCommentsById(article_id).then((response) => {
      setCommentsList(response);
    });
  }, [article_id]);

  return (
    <Box className="individual-article-container">
      <Box className="individual-article-box">
        <Typography>
          <h2>{articleDetails.title}</h2>
        </Typography>
      </Box>{" "}
      <Box className="individual-article-box">
        <img
          src={articleDetails.article_img_url}
          alt={`stock image to do with ${articleDetails.topic}`}
        ></img>
      </Box>
      <Box className="individual-article-box">
        <Typography>
          <h4>{articleDetails.body}</h4>
        </Typography>
      </Box>
      <Box className="individual-article-box">
        <Typography>
          <h2>Author: {articleDetails.author}</h2>
        </Typography>
      </Box>
      <Box className="individual-article-box">
        <Typography>
          <h4>Comments: {articleDetails.comment_count}</h4>
        </Typography>
      </Box>
      <CommentList commentsList={commentsList} />
    </Box>
  );
}
