import { Box, Typography, Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { upvoteArticle } from "../utils/patch";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { ThumbDownAlt } from "@mui/icons-material";

export default function ArticleVotes({ votes, articleId }) {
  const [err, setErr] = useState(null);
  const [articleVotes, setArticleVotes] = useState(0);
  const [upvoteClicked, setUpvoteClicked] = useState(false);
  const [downvoteClicked, setDownvoteClicked] = useState(false);
  const [undoClicked, setUndoClicked] = useState(false);
  useEffect(() => {
    setArticleVotes(votes);
  }, [votes]);

  const handleClickUpvote = () => {
    setArticleVotes(articleVotes + 1);
    setErr(null);
    setUpvoteClicked(true);
    setUndoClicked(false);
    upvoteArticle(articleId, { inc_votes: 1 }).catch((err) => {
      setArticleVotes(articleVotes - 1);
      setUpvoteClicked(false);
      setErr("Cannot change votes. Please try again");
    });
  };
  const handleClickDownvote = () => {
    setArticleVotes(articleVotes - 1);
    setErr(null);
    setDownvoteClicked(true);
    setUndoClicked(false);
    upvoteArticle(articleId, { inc_votes: -1 }).catch((err) => {
      setArticleVotes(articleVotes + 1);
      setDownvoteClicked(false);
      setErr("Cannot change votes. Please try again");
    });
  };

  const handleClickUndoUpvote = () => {
    setArticleVotes(articleVotes - 1);
    setErr(null);
    setUndoClicked(true);
    setUpvoteClicked(false);
    upvoteArticle(articleId, { inc_votes: -1 }).catch((err) => {
      setArticleVotes(articleVotes + 1);
      setErr("Cannot change votes. Please try again");
    });
  };
  const handleClickUndoDownvote = () => {
    setArticleVotes(articleVotes + 1);
    setErr(null);
    setUndoClicked(true);
    setDownvoteClicked(false);
    upvoteArticle(articleId, { inc_votes: +1 }).catch((err) => {
      setArticleVotes(articleVotes - 1);
      setErr("Cannot change votes. Please try again");
    });
  };

  return (
    <>
      <Grid
        item={true}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{ pr: 10 }}
        className="individual-article-box"
      >
        <Typography variant="h6" sx={{ mr: 3 }}>
          <>Votes: {articleVotes}</>
        </Typography>{" "}
        {err ? <p>{err}</p> : null}
        {upvoteClicked === false && downvoteClicked === false ? (
          <>
            <Button onClick={handleClickUpvote}>
              {" "}
              <ThumbUpAltIcon fontSize="large" />
            </Button>
          </>
        ) : downvoteClicked === true && upvoteClicked === false ? (
          <Button disabled={true} onClick={handleClickUpvote}>
            {" "}
            <ThumbUpAltIcon fontSize="large" />
          </Button>
        ) : (
          <Button onClick={handleClickUndoUpvote}> UNDO</Button>
        )}{" "}
        {downvoteClicked === false && upvoteClicked === false ? (
          <Button onClick={handleClickDownvote}>
            {" "}
            <ThumbDownAlt fontSize="large" />
          </Button>
        ) : downvoteClicked === false && upvoteClicked === true ? (
          <Button disabled={true} onClick={handleClickDownvote}>
            {" "}
            <ThumbDownAlt fontSize="large" />
          </Button>
        ) : (
          <Button onClick={handleClickUndoDownvote}> UNDO</Button>
        )}
      </Grid>
    </>
  );
}
