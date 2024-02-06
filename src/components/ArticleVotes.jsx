import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { upvoteArticle } from "../utils/patch";

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
      setArticleVotes(articleVotes);
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
      setArticleVotes(articleVotes);
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
      setArticleVotes(articleVotes);
      setDownvoteClicked(false);
      setErr("Cannot change votes. Please try again");
    });
  };
  const handleClickUndoDownvote = () => {
    setArticleVotes(articleVotes + 1);
    setErr(null);
    setUndoClicked(true);
    setDownvoteClicked(false);
    upvoteArticle(articleId, { inc_votes: -1 }).catch((err) => {
      setArticleVotes(articleVotes);
      setDownvoteClicked(false);
      setErr("Cannot change votes. Please try again");
    });
  };

  return (
    <>
      <Box className="individual-article-box">
        <Typography variant="h6">
          <>Votes: {articleVotes}</>
        </Typography>
      </Box>
      <Box className="individual-article-box">
        {" "}
        {err ? <p>{err}</p> : null}
        {upvoteClicked === false && downvoteClicked === false ? (
          <>
            <button onClick={handleClickUpvote}> UPVOTE ARTICLE (+1)</button>
          </>
        ) : downvoteClicked === true && upvoteClicked === false ? (
          <button disabled={true} onClick={handleClickUpvote}>
            {" "}
            UPVOTE ARTICLE (+1)
          </button>
        ) : (
          <button onClick={handleClickUndoUpvote}> UNDO</button>
        )}
      </Box>
      <Box className="individual-article-box">
        {" "}
        {downvoteClicked === false && upvoteClicked === false ? (
          <button onClick={handleClickDownvote}> DOWNVOTE ARTICLE (+1)</button>
        ) : downvoteClicked === false && upvoteClicked === true ? (
          <button disabled={true} onClick={handleClickDownvote}>
            {" "}
            DOWNVOTE ARTICLE (+1)
          </button>
        ) : (
          <button onClick={handleClickUndoDownvote}> UNDO</button>
        )}
      </Box>
    </>
  );
}
