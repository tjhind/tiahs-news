import { Box, Typography, Paper, Button } from "@mui/material";
import { deleteOwnComment } from "../utils/delete";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { SettingsPowerRounded } from "@mui/icons-material";
import Alert from "@mui/material/Alert";

export default function CommentCards({
  comment,
  commentsList,
  setCommentsList,
}) {
  const [err, setErr] = useState(null);
  const { username } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);

  function handleClick() {
    setDisabled(true);
    setCommentsList(
      commentsList.filter((item) => {
        item.comment_id !== comment.comment_id;
      })
    );
    deleteOwnComment(comment.comment_id).then((response) => {
      setDisabled(false);
      if (response.code === "ERR_BAD_REQUEST") {
        alert("Could not delete comment!");
      } else alert("Comment successfully deleted!");
    });
  }
  if (err) return <p>{err}</p>;

  return (
    <Box className="comment-box">
      <Paper elevation={3}>
        <Typography variant="h6">
          <p className="body">{comment.body}</p>
        </Typography>
        <Typography variant="h6">
          <p className="author">{comment.author}</p>
        </Typography>
      </Paper>
      {comment.author === username && disabled === false ? (
        <Button
          disabled={disabled}
          className="delete-button"
          onClick={handleClick}
        >
          Delete your comment
        </Button>
      ) : null}{" "}
    </Box>
  );
}
