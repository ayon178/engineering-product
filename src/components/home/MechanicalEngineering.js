// pages/index.js
import { Box, Container, Grid, Typography } from '@mui/material'

export default function MechanicalEngineering() {
  return (
    <Container maxWidth="lg" sx={{ py: 4, px: 2 }}>
      {/* Image Section */}
      <Box sx={{ mb: 4, px: { xs: 3, sm: 0 } }}>
        <img
          src="/images/industrial-image.jpg" // Replace with your actual image path
          alt="Industrial Image"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>

      {/* Main Content */}
      <Typography variant="h4" component="h1" gutterBottom>
        Mechanical Engineering
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum is simply free text used by copytyping refreshing. Neque
        porro est qui dolorem ipsum quia.
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </Typography>

      {/* List Section */}
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" color="primary">
            ✔ It has survived not only five centuries.
          </Typography>
          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the new design printing and type
            setting Ipsum.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" color="primary">
            ✔ Printing and typesetting industry
          </Typography>
          <Typography variant="body1">
            Lorem Ipsum has been the industry standard dummy text ever since the
            1500s.
          </Typography>
        </Grid>
      </Grid>

      {/* Additional Content */}
      <Typography variant="body1" paragraph>
        When an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </Typography>

      {/* Benefits Section */}
      <Grid container spacing={2} sx={{ my: 4 }}>
        {/* Image on the left */}
        <Grid item xs={12} sm={6}>
          <img
            src="/images/worker-image.jpg" // Replace with your actual image path
            alt="Worker Image"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        {/* Text on the right */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Benefits of Designing
          </Typography>
          <Typography variant="body1" color="error">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum.
          </Typography>
          <ul style={{ marginLeft: '15px', paddingRight: '5px' }}>
            <li>Refreshing to get such a touch.</li>
            <li>Duis aute irure dolor in in voluptate.</li>
            <li>Velit esse cillum eu fugiat pariatur.</li>
            <li>Duis aute irure dolor in the in voluptate.</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  )
}
