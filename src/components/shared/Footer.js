import React from 'react'
import {
  Grid,
  Typography,
  Button,
  Link,
  Container,
  Box,
  IconButton,
} from '@mui/material'
import { COLORS } from '@/constant/constant'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <Box sx={{ backgroundColor: '#333', color: 'white', py: 10 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center" // Center items on small screens
          alignItems="center"
          sx={{ px: { xs: 2, md: 10 }, width: '100%' }}
        >
          {/* Social Handles Section */}
          <Grid
            item
            xs={12}
            md={6} // Take up half width on screens smaller than 'lg'
            lg={4} // Take up one-third width on 'lg' and larger
            sx={{ textAlign: { xs: 'center', lg: 'left' } }} // Center on small screens
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Logo"
              sx={{
                width: 80,
                height: 80,
                mb: 2,
                ml: { lg: '-13px', xs: '0' }, // Left margin on larger screens
              }}
            />
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Grid
              container
              item
              direction="row"
              spacing={1}
              alignItems={{ xs: 'center', lg: 'flex-start' }} // Center icons on small screens
              sx={{
                '& .MuiGrid-item': { gap: '8px' }, // Adjust the gap between icons and links
                '& .MuiTypography-body1': {
                  fontSize: { xs: '0.8rem', md: '0.875rem' }, // Adjust font size for social links
                },
              }}
            >
              {/* Social Media Links with Icons */}
              <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  component={Link}
                  href="https://www.facebook.com/bdfeedbackengineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  sx={{ color: '#1877F2' }}
                >
                  <FacebookIcon fontSize="small" />
                </IconButton>
                {/* <Typography variant="body1">
                  <Link
                    href="https://www.facebook.com/bdfeedbackengineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none', color: '#fff' }}
                  >
                    facebook.com/bdfeedbackengineering
                  </Link>
                </Typography> */}
              </Grid>

              {/* Instagram */}
              <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  component={Link}
                  href="https://www.instagram.com/bdfeedbackengineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  sx={{ color: '#E1306C' }}
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
                {/* <Typography variant="body1">
                  <Link
                    href="https://www.instagram.com/bdfeedbackengineering/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none', color: '#fff' }}
                  >
                    instagram.com/bdfeedbackengineering
                  </Link>
                </Typography> */}
              </Grid>

              {/* Twitter */}
              <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  component={Link}
                  href="https://x.com/bdfeedback"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  sx={{ color: '#1DA1F2' }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                {/* <Typography variant="body1">
                  <Link
                    href="https://x.com/bdfeedback"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none', color: '#fff' }}
                  >
                    x.com/bdfeedback
                  </Link>
                </Typography> */}
              </Grid>

              {/* LinkedIn */}
              <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  component={Link}
                  href="https://www.linkedin.com/in/bdfeedbackengineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={{ color: '#0077B5' }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                {/* <Typography variant="body1">
                  <Link
                    href="https://www.linkedin.com/in/bdfeedbackengineering/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none', color: '#fff' }}
                  >
                    linkedin.com/in/bdfeedbackengineering
                  </Link>
                </Typography> */}
              </Grid>
            </Grid>
          </Grid>

          {/* CTA Section */}
          <Grid
            item
            xs={12}
            md={6} // Take up half width on smaller screens
            lg={4} // Take up one-third width on larger screens
            sx={{ textAlign: 'center' }}
          >
            <Typography variant="h6" gutterBottom>
              Stay Updated
            </Typography>
            <Typography variant="body2" gutterBottom>
              Join our newsletter to stay up to date with our latest news and
              offers.
            </Typography>
            <Button
              variant="contained"
              href="#subscribe"
              sx={{
                mt: 2,
                color: COLORS.secondMain,
                backgroundColor: COLORS.secondary,
                fontWeight: 'bold',
              }}
            >
              Subscribe
            </Button>
          </Grid>

          {/* Sitemap Section */}
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ textAlign: { xs: 'center', lg: 'right' } }}
          >
            <Typography variant="h6" gutterBottom>
              Sitemap
            </Typography>
            <Grid container direction="column" sx={{ gap: '10px' }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Bar Section */}
      <Box
        sx={{
          backgroundColor: '#222',
          color: 'white',
          py: 2,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2">
            © {new Date().getFullYear()} All rights reserved. |
            <Link href="/terms" color="inherit" underline="hover">
              Terms & Conditions
            </Link>{' '}
            |
            <Link href="/privacy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Footer
