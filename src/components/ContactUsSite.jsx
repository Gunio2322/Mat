import React from "react";
import { Box, Grid, Typography, TextField, Button, Paper, Avatar } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const ContactUsSite = () => (
  <Box sx={{ py: 8, bgcolor: "#212121" }}>
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.5rem" }, color: "primary.main", mb: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff", mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Avatar src="/example/mea-free-lite/assets/images/section-image3.png" sx={{ width: 80, height: 80, mb: 2, bgcolor: "primary.main" }}>
                <ContactMailIcon fontSize="large" />
              </Avatar>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, bgcolor: "#fff" }}>
            <form>
              <TextField label="Name" name="name" fullWidth required margin="normal" />
              <TextField label="Email" name="email" type="email" fullWidth required margin="normal" />
              <TextField label="Subject" name="subject" fullWidth required margin="normal" />
              <TextField label="Message" name="message" multiline rows={3} fullWidth required margin="normal" />
              <Box sx={{ mt: 2, textAlign: "right" }}>
                <Button variant="contained" color="primary" type="submit" startIcon={<ContactMailIcon />}>Send Message</Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default ContactUsSite;
