import React from 'react'
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { pGenerator1, pGenerator2, pGenerator3, pGenerator5 } from '@/constant/images';

const generatorSubstation = [
  {
    id: 1,
    name: 'Generator Substation 1',
    description: 'Outdoor wall mounted capsule elevator, suitable for shopping malls & community buildings.',
    image: pGenerator1,
  },
  {
    id: 2,
    name: 'Generator Substation 2',
    description: 'Outdoor wall mounted rectangular capsule elevator, transparent body for malls & industrial uses.',
    image: pGenerator2,
  },
  {
    id: 3,
    name: 'Generator Substation 3',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pGenerator3,
  },
  {
    id: 4,
    name: 'Generator Substation 4',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pGenerator5,
  },
  
 
];

const Generator = () => {
  return (
     <Container sx={{ py: 5, mt: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 500 }}>
          Generator <span style={{ color: '#ff4d4d' }}>Substation</span>
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ffcc00',
            borderRadius: 20,
            px: 4,
            mb: 2,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': { backgroundColor: '#ffaa00' },
          }}
        >
          Choose the best generator substation from global brands
        </Button>
      </Box>

      <Grid container spacing={4}>
        {generatorSubstation.map((elevator) => (
          <Grid item xs={12} md={4} key={elevator.id}>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Box
                component="img"
                src={elevator.image.src}
                alt={elevator.name}
                sx={{
                  width: '100%',
                  maxHeight: 300, 
                  objectFit: 'cover',
                }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {elevator.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {elevator.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Generator