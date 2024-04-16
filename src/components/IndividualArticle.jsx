import { useEffect, useState } from "react";
import { getArticleById, getCommentsById } from "../utils/get";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid, Paper } from "@mui/material";
import CommentList from "./CommentList";
import ArticleVotes from "./ArticleVotes";
import CommentAdder from "./CommentAdder";
import Loading from "./Loading";

export default function IndividualArticle() {
  const [articleDetails, setArticleDetails] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        setArticleDetails(response);
      })
      .catch((err) => {
        setErr("Could not load article");
      });
    getCommentsById(article_id)
      .then((response) => {
        setLoading(false);
        setCommentsList(response);
      })
      .catch((err) => {
        setErr("Could not load article");
      });
  }, []);

  if (err) return <p>{err}</p>;
  if (loading) return <Loading />;

  return (
    <>
      {err ? (
        <>p{err}</>
      ) : (
        <>
          <Typography
            variant="h4"
            align="center"
            fontWeight={500}
            sx={{ p: 4, textTransform: "uppercase" }}
          >
            <>{articleDetails.title}</>
          </Typography>{" "}
          <Grid container>
            <Grid
              item={true}
              align="center"
              className="individual-article-box"
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{ pr: 0 }}
            >
              <img
                id="article-image"
                src={articleDetails.article_img_url}
                alt={`stock image about ${articleDetails.topic}`}
              ></img>
            </Grid>{" "}
            <Grid
              item={true}
              align="justify"
              sx={{ pb: 2 }}
              sm={12}
              md={6}
              lg={6}
              xl={6}
            >
              <Box sx={{ pb: 4 }}>
                <Typography variant="h7" sx={{ lineHeight: 2 }}>
                  <>{articleDetails.body}</>
                </Typography>
              </Box>
              <Typography variant="h6">
                <>Author: {articleDetails.author}</>
              </Typography>
            </Grid>{" "}
          </Grid>
          <Grid container spacing={0} sx={{pt: 2, pl: 4}}>
            <ArticleVotes articleId={article_id} votes={articleDetails.votes} />
          </Grid>
          <CommentAdder
            articleId={article_id}
            setCommentsList={setCommentsList}
            commentsList={commentsList}
          />
          <CommentList
            commentsList={commentsList}
            setCommentsList={setCommentsList}
          />{" "}
        </>
      )}
    </>
  );
}
