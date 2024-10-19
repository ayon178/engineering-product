import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'

const commitments = [
  {
    icon: '/path/to/experience-icon.svg', // Replace with actual path to the icons
    title: 'Experience',
    description:
      'Building our reputation on 30 years of developing communities through carefully precision design.',
  },
  {
    icon: '/path/to/certifications-icon.svg', // Replace with actual path to the icons
    title: 'Certifications',
    description:
      'Building our reputation on 30 years of developing communities through carefully precision design.',
  },
  {
    icon: '/path/to/environment-icon.svg', // Replace with actual path to the icons
    title: 'Environment',
    description:
      'Building our reputation on 30 years of developing communities through carefully precision design.',
  },
  {
    icon: '/path/to/sustainability-icon.svg', // Replace with actual path to the icons
    title: 'Sustainability',
    description:
      'Building our reputation on 30 years of developing communities through carefully precision design.',
  },
]

const CommitmentSection = () => {
  return (
    <Box sx={{ backgroundColor: '#001e49', py: 10 }}>
      <Container>
        {/* Main Heading */}
        <Typography
          variant="h4"
          align="center"
          color="white"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          In 2020, we made new long-term commitments to sustainable development.
        </Typography>
        <Typography variant="body1" align="center" color="white" paragraph>
          Sustainable development is a way to conduct our business that
          considers meeting the needs of all stakeholders, today and in the
          future.
        </Typography>

        {/* Commitments Section */}
        <Grid container spacing={4} justifyContent="center">
          {commitments.map((commitment, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ textAlign: 'center' }}
            >
              <img
                src={commitment.icon}
                alt={commitment.title}
                style={{ width: 50, height: 50, marginBottom: 16 }}
              />
              <Typography variant="h6" color="white" gutterBottom>
                {commitment.title}
              </Typography>
              <Typography variant="body2" color="white">
                {commitment.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CommitmentSection
