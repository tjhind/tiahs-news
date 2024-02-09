import {
  Collapse,
  Select,
  MenuItem,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Hidden } from "@mui/material";
import { useState } from "react";

export default function SortByList({
  topicList,
  setSortTopic,
  setSortBy,
  sort_by,
  setSortOrder,
  open,
  setOpen,
}) {
  return (
    <>
      <Hidden mdUp={true}>
        <List>
          <ListItem divider>
            <ListItemButton onClick={() => setOpen(true)}>
              <ListItemIcon>{">"}</ListItemIcon>
              <ListItemText primary={"Sort by... "} />
            </ListItemButton>
            {open ? (
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemText primary={"Close"} />
              </ListItemButton>
            ) : null}
          </ListItem>
        </List>
        <Collapse in={open}>
          <List>
            <ListItem>
              {" "}
              <Container id="sortby-list-container">
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  justifyContent="center"
                  id="sort-by-grid"
                >
                  <Grid item="true" className="sort-by-box">
                    <Typography variant="h5" align="center" sx={{ pb: 0.5 }}>
                      Sort By:
                    </Typography>
                    <Select
                      variant="outlined"
                      value={sort_by || "created_at"}
                      sx={{
                        marginTop: 0,
                        width: 210,
                        height: 35,
                        boxShadow: 5,
                      }}
                      onChange={(e) => {
                        setSortBy(e.target.value);
                      }}
                      className="sort-by-dropdown"
                    >
                      <MenuItem value="created_at">Default: date</MenuItem>
                      <MenuItem value="author">Author</MenuItem>
                      <MenuItem value="title">Title</MenuItem>
                      <MenuItem value="votes">Votes</MenuItem>
                      <MenuItem value="comment_count">Comments</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item="true" className="sort-by-box" sx={{ mt: 2 }}>
                    <Typography variant="h5" align="center" sx={{ pb: 0.5 }}>
                      Topics:
                    </Typography>
                    <ButtonGroup
                      variant="outlined"
                      aria-label="Basic button group"
                      sx={{
                        marginTop: 0,
                        width: 250,
                        height: 35,
                        boxShadow: 5,
                      }}
                    >
                      {topicList.map((topic, i) => {
                        const topicName =
                          topic.slug[0].toUpperCase() +
                          topic.slug.slice(1, topic.length).toLowerCase();
                        return (
                          <Button
                            className="sortby-button"
                            key={`topic${i}`}
                            onClick={() => setSortTopic(topic.slug)}
                          >
                            {topicName}
                          </Button>
                        );
                      })}{" "}
                    </ButtonGroup>
                  </Grid>
                  <Grid item="true" className="sort-by-box" sx={{ mt: 2 }}>
                    <Typography variant="h5" align="center" sx={{ pb: 0.5 }}>
                      Order:
                    </Typography>
                    <ButtonGroup
                      variant="outlined"
                      aria-label="Basic button group"
                      sx={{ boxShadow: 5, height: 35 }}
                    >
                      <Button
                        className="sortby-button"
                        key="order2"
                        onClick={() => setSortOrder("desc")}
                      >
                        {sort_by === "created_at" || !sort_by
                          ? "Default: Newest first"
                          : sort_by === "votes"
                          ? "Most to least votes"
                          : "Z-A"}
                      </Button>
                      <Button
                        className="sortby-button"
                        key="order1"
                        onClick={() => setSortOrder("asc")}
                      >
                        {" "}
                        {sort_by === "created_at" || !sort_by
                          ? "Oldest First"
                          : sort_by === "votes"
                          ? "Least to most votes"
                          : "A-Z"}
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Container>{" "}
            </ListItem>
          </List>
        </Collapse>
      </Hidden>

      <Hidden mdDown={true}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          id="sort-by-grid"
        >
          <Grid item="true" className="sort-by-box" sx={{ mt: 2 }}>
            <Typography variant="h5" align="center" sx={{ pb: 0.5 }}>
              Sort By:
            </Typography>
            <Select
              variant="outlined"
              value={sort_by || "created_at"}
              sx={{
                marginTop: 0,
                width: 210,
                height: 35,
                boxShadow: 5,
              }}
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
              className="sort-by-dropdown"
            >
              <MenuItem value="created_at">Default: date</MenuItem>
              <MenuItem value="author">Author</MenuItem>
              <MenuItem value="title">Title</MenuItem>
              <MenuItem value="votes">Votes</MenuItem>
              <MenuItem value="comment_count">Comments</MenuItem>
            </Select>
          </Grid>
          <Grid item="true" className="sort-by-box" sx={{ mt: 2 }}>
            <Typography variant="h5" align="center" sx={{ pb: 0.5 }}>
              Topics:
            </Typography>
            <ButtonGroup
              variant="outlined"
              aria-label="Basic button group"
              sx={{
                marginTop: 0,
                width: 250,
                height: 35,
                boxShadow: 5,
              }}
            >
              {topicList.map((topic, i) => {
                const topicName =
                  topic.slug[0].toUpperCase() +
                  topic.slug.slice(1, topic.length).toLowerCase();
                return (
                  <Button
                    className="sortby-button"
                    key={`topic${i}`}
                    onClick={() => setSortTopic(topic.slug)}
                  >
                    {topicName}
                  </Button>
                );
              })}{" "}
            </ButtonGroup>
          </Grid>
          <Grid item="true" className="sort-by-box" sx={{ mt: 2 }}>
            <Typography variant="h5" align="center" sx={{ pb: 0.5 }}>
              Order:
            </Typography>
            <ButtonGroup
              variant="outlined"
              aria-label="Basic button group"
              sx={{ boxShadow: 5, height: 35 }}
            >
              <Button
                className="sortby-button"
                key="order2"
                onClick={() => setSortOrder("desc")}
              >
                {sort_by === "created_at" || !sort_by
                  ? "Default: Newest first"
                  : sort_by === "votes"
                  ? "Most to least votes"
                  : "Z-A"}
              </Button>
              <Button
                className="sortby-button"
                key="order1"
                onClick={() => setSortOrder("asc")}
              >
                {" "}
                {sort_by === "created_at" || !sort_by
                  ? "Oldest First"
                  : sort_by === "votes"
                  ? "Least to most votes"
                  : "A-Z"}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}
