import { useEffect, useState } from "react";
import { getCommentsById } from "../utils/get";
import CommentCards from "./CommentCards";
import { Box, Typography } from "@mui/material";

export default function CommentList({ commentsList }) {

  return (
    <Box className="comment-list-container">
      <Typography variant="h5">Comments</Typography>
      <ol id="comment-list">
        {console.log(commentsList)} 
        {commentsList.map((comment, i) => {
          return <CommentCards key={i} comment={comment} />;
        })}
      </ol>
    </Box>
  );
}
