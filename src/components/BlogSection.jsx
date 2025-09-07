import React from "react";
import { Box, Grid, Typography, Paper, Button, Avatar } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

const articles = [
  {
    image: "featured1.png",
    title: "Lorem ipsum do lor sit amet, cosectetur adipisicing",
    author: "Kelly Grover"
  },
  {
    image: "featured2.png",
    title: "Lorem ipsum do lor sit amet, cosectetur adipisicing",
    author: "Kelly Grover"
  },
  {
    image: "featured3.png",
    title: "Lorem ipsum do lor sit amet, cosectetur adipisicing",
    author: "Kelly Grover"
  }
];

const BlogSection = () => (
  <Box sx={{ py: 8, bgcolor: "#fff" }}>
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.5rem" }, color: "primary.main", mb: 1 }}>
            Stories
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "text.secondary", mb: 2 }}>
            Our Stories
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ pl: { md: 4 }, borderLeft: { md: "4px solid #1976d2" } }}>
            <blockquote style={{ margin: 0 }}>
              <Typography variant="body1" sx={{ fontStyle: "italic", color: "text.secondary" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Typography>
            </blockquote>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: { xs: 4, md: 8 } }}>
        {articles.map((a, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={2} sx={{ p: 0, overflow: "hidden" }}>
              <Box sx={{ height: 180, bgcolor: "grey.100", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Avatar variant="square" src={`/example/mea-free-lite/assets/images/blog/${a.image}`} sx={{ width: "100%", height: "100%" }}>
                  <ArticleIcon fontSize="large" color="action" />
                </Avatar>
              </Box>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {a.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  by <b>{a.author}</b>
                </Typography>
                <Button variant="contained" size="small" startIcon={<ArticleIcon />} sx={{ borderRadius: "50px" }}>
                  Read More
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button variant="contained" color="primary" startIcon={<ArticleIcon />} size="large">
          Explore More Stories
        </Button>
      </Box>
    </Box>
  </Box>
);

export default BlogSection;
