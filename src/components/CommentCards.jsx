import { Box, Typography, Paper } from "@mui/material";

export default function CommentCards({ comment }) {
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
    </Box>
  );
}
