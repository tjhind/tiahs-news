import { useState, useContext } from "react";
import { postNewComment } from "../utils/post";
import UserContext from "../contexts/UserContext";
import { Box } from "@mui/material";

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
  const [success, setSuccess] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let newCommentObject = {};
    newCommentObject.body = newCommentBody;
    newCommentObject.username = newCommentAuthor;
    newCommentObject.votes = 0;

    {
      newCommentObject.body.length < 10
        ? setErr("Error: Please type in a comment of at least 10 characters")
        : null;
    }
    if (!err) {
      postNewComment(newCommentArticleId, newCommentObject)
        .then((response) => {
          setIsDisabled(true);
          if (response.message === "Network Error") {
            setErr("Could not connect. Please try again");
          }
          setSuccess("Your comment has been posted!");
          setCommentsList([...commentsList], [newCommentObject]);
          setIsDisabled(false);
        })
        .catch((err) => {
          setIsDisabled(false);
          setErr(
            "Could not post comment. Please refresh the page and try again"
          );
        });
    }
    setNewCommentBody("");
  }
  return (
    <>
      <Box className="comment-adder-box">
        <h2>Post a comment</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="commentBody">Enter your comment here:</label>
          <input
            className="commentBody"
            type="text"
            id="commentBody"
            value={newCommentBody}
            onChange={(event) => setNewCommentBody(event.target.value)}
          ></input>

          {isDisabled ? (
            <button disabled={true} className="submitButton">
              Submit
            </button>
          ) : (
            <button disabled={false} className="submitButton">
              Submit
            </button>
          )}
        </form>
        {success ? <p>{success}</p> : null}
        {err ? <p>{err}</p> : null}
      </Box>
    </>
  );
}
