
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const widgets = [
  {
    icon: <InsightsIcon fontSize="large" color="primary" />,
    title: "Insights",
    desc: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui officia deserunt mollit animidest laborum."
  },
  {
    icon: <DesignServicesIcon fontSize="large" color="action" />,
    title: "Design",
    desc: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui officia deserunt mollit animidest laborum."
  },
  {
    icon: <TrendingUpIcon fontSize="large" color="disabled" />,
    title: "Growth",
    desc: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui officia deserunt mollit animidest laborum."
  }
];

const AboutSection = () => (
  <Box sx={{ py: 8, bgcolor: "#f7fafd" }}>
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Nagłówki i cytat */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.5rem" }, color: "primary.main", mb: 1 }}>
              About MEA
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.5rem" }, color: "#e0e0e0", position: "absolute", opacity: 0.2, left: 0, top: 0, zIndex: 0, pointerEvents: "none" }}>
              About MEA
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ pl: { md: 4 }, borderLeft: { md: "4px solid #1976d2" } }}>
            <blockquote style={{ margin: 0 }}>
              <Typography variant="body1" sx={{ fontStyle: "italic", color: "text.secondary" }}>
                We are a strategic, creative studio based out of Savannah, Georgia. Our close team of innovative professionals is passionate about partnering with good people and organizations.
              </Typography>
            </blockquote>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: { xs: 4, md: 8 } }}>
        {widgets.map((w, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center", height: "100%" }}>
              {w.icon}
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                {w.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {w.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default AboutSection;
