import { Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { ThumbDownAlt } from "@mui/icons-material";
export default function ArticleCards({ article }) {
  return (
    <Grid
      container
      item={true}
      className="article-box"
      lg={4}
      md={6}
      sm={12}
      xs={12}
      spacing={4}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item={true}>
        <Card sx={{ width: 345, height: 370, mb: 4 }}>
          <Link to={`/articles/${article.article_id}`} id="article-link">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={article.article_img_url}
                alt={`generic stock image of ${article.topic}`}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={500}
                  tcomponent="div"
                >
                  {article.title}
                </Typography>
              </CardContent>
            </CardActionArea>{" "}
          </Link>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
            Author: {article.author}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
            <ThumbUpAltIcon fontSize="xsmall" /> {article.votes}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
            Comments: {article.comment_count}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
