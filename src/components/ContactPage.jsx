import React from "react";
import { Box, Grid, Typography, TextField, Button, Paper, Divider } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const ContactPage = () => (
  <Box>
    {/* Page Title Area */}
    <Box sx={{ bgcolor: '#f5f5f5', py: 6 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" color="textSecondary">Always feel free to</Typography>
            <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>Contact</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>

    {/* Map Placeholder */}
    <Box sx={{ width: '100%', height: 300, bgcolor: '#e0e0e0', mb: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h6" color="textSecondary">[Google Map Placeholder]</Typography>
    </Box>

    {/* Contact Us Section */}
    <Box sx={{ py: 8, bgcolor: '#fff' }}>
      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>
            We’re always here to hear from you
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 3 }}>
                <LocationOnIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="h6">Address</Typography>
                <Typography variant="body2">4435 Berkshire Circle</Typography>
                <Typography variant="body2">Knoxville</Typography>
                <Typography variant="body2">TN 27912</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 3 }}>
                <PhoneIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="h6">Phone</Typography>
                <Typography variant="body2">879-890-9767</Typography>
                <Typography variant="body2">234-890-1213</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 3 }}>
                <EmailIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="h6">Email</Typography>
                <Typography variant="body2">mail@mea.com</Typography>
                <Typography variant="body2">support@mea.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 3 }}>
                <AccessTimeIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="h6">Opening Hours</Typography>
                <Typography variant="body2">Mon - Fri: 8 AM - 3 PM</Typography>
                <Typography variant="body2">Sat: 8 AM - 12 PM</Typography>
                <Typography variant="body2">Sun: Closed</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
            <form noValidate autoComplete="off">
              <TextField label="Name" name="name" fullWidth required margin="normal" />
              <TextField label="Email" name="email" type="email" fullWidth required margin="normal" />
              <TextField label="Subject" name="subject" fullWidth required margin="normal" />
              <TextField label="Message" name="message" multiline rows={3} fullWidth required margin="normal" />
              <Box sx={{ mt: 2, textAlign: 'right' }}>
                <Button variant="contained" color="primary" type="submit" endIcon={<SendIcon />}>Send Message</Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default ContactPage;
