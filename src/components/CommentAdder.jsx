import { useState, useContext } from "react";
import { postNewComment } from "../utils/post";
import UserContext from "../contexts/UserContext";
import { Box, TextField, Button } from "@mui/material";
import { getCommentsById } from "../utils/get";
import Loading from "./Loading";

export default function CommentAdder({
  articleId,
  setCommentsList,
  commentsList,
}) {
  const { username } = useContext(UserContext);
  const [newCommentBody, setNewCommentBody] = useState("");
  const [newCommentAuthor, setNewCommentAuthor] = useState(username);
  const [newCommentVotes, setNewCommentVotes] = useState(0);
  const [newCommentArticleId, setNewCommentArticleId] = useState(articleId);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSuccess(null);
    let newCommentObject = {};
    newCommentObject.body = newCommentBody;
    newCommentObject.username = newCommentAuthor;
    newCommentObject.votes = 0;

    {
      newCommentObject.body.length < 10
        ? setErr("Error: Please type in a comment of at least 10 characters")
        : postNewComment(newCommentArticleId, newCommentObject)
            .then((response) => {
              setLoading(true);
              setIsDisabled(true);
              if (response.message === "Network Error") {
                setErr("Could not connect. Please try again");
              }
              setSuccess("Your comment has been posted!");
              setErr(null);
              getCommentsById(newCommentArticleId).then((response) => {
                setCommentsList(response);
                setIsDisabled(false);
                setLoading(false);
              });
            })
            .catch((err) => {
              setIsDisabled(false);
              setisLoading(false);
              setErr(
                "Could not post comment. Please refresh the page and try again"
              );
            });
      setNewCommentBody("");
    }
  }

  return (
    <>
      <Box className="comment-adder-box">
        <h2>Post a comment:</h2>
        <form onSubmit={handleSubmit}>
          {" "}
          {loading ? <Loading /> : null}
          <TextField
            className="commentBody"
            multiline
            rows={2}
            type="text"
            id="commentBody"
            value={newCommentBody}
            fullWidth
            onChange={(event) => setNewCommentBody(event.target.value)}
          />
          {isDisabled ? (
            <Button
              type="submit"
              disabled={true}
              className="submitButton"
              sx={{ mb: 2, mt: 2 }}
            >
              Submit
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={false}
              className="submitButton"
              sx={{ mb: 2, mt: 2 }}
            >
              Submit
            </Button>
          )}
        </form>
        {err ? <p>{err}</p> : null} {success ? <p>{success}</p> : null}
      </Box>
    </>
  );
}
