import { Box, Typography, Paper, Button } from "@mui/material";
import { deleteOwnComment } from "../utils/delete";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import Loading from "./Loading";

export default function CommentCards({
  comment,
  commentsList,
  setCommentsList,
}) {
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const { username } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setSuccess(null);
    setDisabled(true);
    setErr(null);

    deleteOwnComment(comment.comment_id).then((response) => {
      setLoading(false);
      setDisabled(false);
      setSuccess("Comment successfully deleted!");
      setCommentsList(
        commentsList.filter((item) => item.comment_id !== comment.comment_id)
      );

      if (response.code === "ERR_BAD_REQUEST") {
        setLoading(false);
        setErr("Could not delete comment! Please try again");
      }
    });
  }

  return (
    <Box className="comment-box">
      <Box className="response-box">
        {" "}
        {err ? <p>{err}</p> : success ? <p>{success}</p> : null}
      </Box>{" "}
      <Paper elevation={3}>
        <Typography variant="h6">
          <p className="body">{comment.body}</p>
        </Typography>
        <Typography variant="h6">
          <p className="author">{comment.author}</p>
        </Typography>
      </Paper>
      {comment.author === username ? (
        <Button
          disabled={disabled}
          className="delete-button"
          onClick={handleClick}
        >
          {loading ? <Loading /> : null}
          Delete your comment
        </Button>
      ) : null}{" "}
    </Box>
  );
}
