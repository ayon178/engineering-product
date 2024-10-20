import React from 'react'
import { Container, Grid, Typography, Box, Divider } from '@mui/material'

const coreFeatures = [
  {
    icon: 'https://i.ibb.co/qBF454f/mission.png', // Replace with actual path to the icon
    title: 'MISSION',
  },
  {
    icon: 'https://i.ibb.co/MGPxH6s/vission.png', // Replace with actual path to the icon
    title: 'VISION',
  },
  {
    icon: 'https://i.ibb.co/6NzVNZ9/values.png', // Replace with actual path to the icon
    title: 'VALUES',
  },
]

const CoreFeaturesSection = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Container>
        {/* Core Features Label */}
        <Typography
          variant="overline"
          sx={{ color: 'orange', fontWeight: 'bold' }}
        >
          OUR CORE FEATURES
        </Typography>

        {/* Main Heading */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mt: 1,
            fontSize: {
              xs: '0.9rem',
              sm: '1.4rem',
            },
          }}
        >
          A high level Quality Control in compliance with National and
          International regulations and standards
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          sx={{
            fontSize: {
              xs: '0.8rem',
              sm: '1.2rem',
            },
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 4, width: '50%', marginX: 'auto' }} />

        {/* Icons and Text */}
        <Grid container spacing={4} justifyContent="center">
          {coreFeatures.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  borderLeft: index === 1 ? '1px solid gray' : 0,
                  borderRight: index === 1 ? '1px solid gray' : 0,
                }}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  style={{ width: 50, height: 50, marginBottom: 16 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CoreFeaturesSection
