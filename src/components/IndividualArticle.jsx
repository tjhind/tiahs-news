import { useEffect, useState } from "react";
import { getArticleById } from "../utils/get";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function IndividualArticle() {
  const [articleDetails, setArticleDetails] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticleDetails(response);
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
          alt={articleDetails.title}
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
      {/* <CommentList /> */}
    </Box>
  );
}
