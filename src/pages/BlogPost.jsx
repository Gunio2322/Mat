import React from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button, Avatar, Paper } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

const articles = [
  {
    id: 1,
    image: "featured1.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    author: "Kelly Grover",
    content: "Pełna treść pierwszego artykułu. Możesz tu dodać dowolny tekst, zdjęcia, cytaty itd."
  },
  {
    id: 2,
    image: "featured2.png",
    title: "Quis nostrud exercitation ullamco laboris nisi",
    author: "Kelly Grover",
    content: "Pełna treść drugiego artykułu. Możesz tu dodać dowolny tekst, zdjęcia, cytaty itd."
  },
  {
    id: 3,
    image: "featured3.png",
    title: "Ut enim ad minim veniam, quis nostrud",
    author: "Kelly Grover",
    content: "Pełna treść trzeciego artykułu. Możesz tu dodać dowolny tekst, zdjęcia, cytaty itd."
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <Box sx={{ maxWidth: 700, mx: "auto", my: 4 }}>
        <Typography variant="h5">Nie znaleziono artykułu</Typography>
        <Button component={Link} to="/blog" sx={{ mt: 2 }}>Powrót do bloga</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, bgcolor: "#fff" }}>
      <Box sx={{ maxWidth: 700, mx: "auto" }}>
        <Paper elevation={2} sx={{ p: 0, overflow: "hidden", mb: 4 }}>
          <Box sx={{ height: 220, bgcolor: "grey.100", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Avatar variant="square" src={`/example/mea-free-lite/assets/images/blog/${article.image}`} sx={{ width: "100%", height: "100%" }}>
              <ArticleIcon fontSize="large" color="action" />
            </Avatar>
          </Box>
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              by <b>{article.author}</b>
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {article.content}
            </Typography>
            <Button component={Link} to="/blog" variant="outlined" startIcon={<ArticleIcon />}>
              Powrót do bloga
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}