import React from 'react';
import { Box, Grid, Typography, Link, List, ListItem, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DribbbleIcon from '@mui/icons-material/SportsBasketball';

const FooterSection = () => (
    <Box component="footer" sx={{ bgcolor: '#222', color: '#fff', pt: 6, pb: 2, mt: 8 }}>
        <Box className="footer-widget-container" sx={{ px: { xs: 2, md: 6 } }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 2 }}>About MEA</Typography>
                    <Typography variant="body2">
                        Fresh, innovative, creative, minimalist ... What's your style? You probably won't have a better chance to show off all your potential if it's not by designing a website for your own agency or web studio. It's time to push all those ideas and concepts forward.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Recent News</Typography>
                    <List dense>
                        <ListItem><Link href="#" color="inherit" underline="hover">21 things that won’t help you become a better designer</Link></ListItem>
                        <ListItem><Link href="#" color="inherit" underline="hover">User Experience & Luxury Fashion Brands: A UX Designer’s Perspective</Link></ListItem>
                        <ListItem><Link href="#" color="inherit" underline="hover">Don’t Listen to Users and 4 Other Myths About Usability Testing</Link></ListItem>
                        <ListItem><Link href="#" color="inherit" underline="hover">Photoshop Express gets a UI update</Link></ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Recent Works</Typography>
                    <List dense>
                        <ListItem>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="img" src="/assets/images/work/footer-work1.png" alt="work1" sx={{ width: 40, height: 40, mr: 2 }} />
                                <Box>
                                    <Typography variant="subtitle2">Bower JS plugin release</Typography>
                                    <Typography variant="caption">September 20, 2016</Typography>
                                </Box>
                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="img" src="/assets/images/work/footer-work2.png" alt="work2" sx={{ width: 40, height: 40, mr: 2 }} />
                                <Box>
                                    <Typography variant="subtitle2">Flat Icon collection</Typography>
                                    <Typography variant="caption">October 30, 2016</Typography>
                                </Box>
                            </Box>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Contact Us</Typography>
                    <Typography variant="body2"><span>Phone:</span> 879-890-9767</Typography>
                    <Typography variant="body2"><span>Email:</span> support@mea.com</Typography>
                    <Typography variant="body2"><span>Twitter:</span> @mea</Typography>
                    <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Follow Us</Typography>
                    <Box>
                        <IconButton href="#" color="inherit"><FacebookIcon /></IconButton>
                        <IconButton href="#" color="inherit"><TwitterIcon /></IconButton>
                        <IconButton href="#" color="inherit"><DribbbleIcon /></IconButton>
                        <IconButton href="#" color="inherit"><GitHubIcon /></IconButton>
                        <IconButton href="#" color="inherit"><LinkedInIcon /></IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box className="footer-copyright-section" sx={{ mt: 6, pt: 2, borderTop: '1px solid #444' }}>
            <Grid container alignItems="center">
                <Grid alignItems="center" xs={12} md={6}>
                    <Typography variant="body2">&copy; 2025 Mariusz Głuszcz. All rights reserved.</Typography>
                </Grid>
            </Grid>
        </Box>
    </Box>
);

export default FooterSection;
