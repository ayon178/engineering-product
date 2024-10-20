import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material'

const services = [
  {
    title: 'After Sales',
    description: 'Consectetur adipiscing elit.',
    icon: 'https://i.ibb.co/4WG0B1R/after-sales.png',
  },
  {
    title: 'Engineering',
    description: 'Consectetur adipiscing elit.',
    icon: 'https://i.ibb.co/y8K2bDd/engineering.png',
  },
  {
    title: 'Expert Installation',
    description: 'Consectetur adipiscing elit.',
    icon: 'https://i.ibb.co/GR8wL0v/expert.png',
  },
  {
    title: 'Products',
    description: 'Consectetur adipiscing elit.',
    icon: 'https://i.ibb.co/n6cpzHg/products.png',
  },
]

const ServiceSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left side (Text Section) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            marginTop: { xs: 0, md: 5 },
          }}
        >
          <Typography variant="overline" color="primary" gutterBottom>
            Corporate Service
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '3rem',
              },
            }}
          >
            Metal fabrication & engineering services
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Typography>
        </Grid>

        {/* Right side (Service Cards) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} sx={{ py: 5 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '200px',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={service.icon}
                    alt={service.title}
                    sx={{ width: 50, height: 50, }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ServiceSection
