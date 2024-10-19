import React from 'react'
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { pCarElevator1, pCarElevator2, pCargoElevator1, pCargoElevator2, pCargoElevator3, pEscalator1, pEscalator2, pEscalator3, pHospitalElevator1, pHospitalElevator2, pHospitalElevator3, pHospitalElevator4, pObservatiorElevator1, pObservatiorElevator2, pObservatiorElevator3, pObservatiorElevator4, pObservatiorElevator5, pPassengerElevator1, pPassengerElevator10, pPassengerElevator11, pPassengerElevator2, pPassengerElevator3, pPassengerElevator4, pPassengerElevator5, pPassengerElevator6, pPassengerElevator7, pPassengerElevator8, pPassengerElevator9 } from '@/constant/images';

const images = {pObservatiorElevator1, pObservatiorElevator2, pObservatiorElevator3, pObservatiorElevator4, pObservatiorElevator5,pCarElevator1, pCarElevator2,pHospitalElevator1,pHospitalElevator2,pHospitalElevator3, pHospitalElevator4, pPassengerElevator1, pPassengerElevator2, pPassengerElevator3, pPassengerElevator4, pPassengerElevator5, pPassengerElevator6, pPassengerElevator7, pPassengerElevator8, pPassengerElevator9, pPassengerElevator10, pPassengerElevator11}

const observationElevators = [
  {
    id: 1,
    name: 'BDFE Observation Elevator 1',
    description: 'Outdoor wall mounted capsule elevator, suitable for shopping malls & community buildings.',
    image: pObservatiorElevator1,
  },
  {
    id: 2,
    name: 'BDFE Observation Elevator 2',
    description: 'Outdoor wall mounted rectangular capsule elevator, transparent body for malls & industrial uses.',
    image: pObservatiorElevator2,
  },
  {
    id: 3,
    name: 'BDFE Observation Elevator 3',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pObservatiorElevator3,
  },
  {
    id: 4,
    name: 'BDFE Observation Elevator 3',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pObservatiorElevator4,
  },
  {
    id: 5,
    name: 'BDFE Observation Elevator 3',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pObservatiorElevator5,
  },
 
];
const hospitalElevators = [
  {
    id: 1,
    name: 'Hospital Elevator 1',
    description: 'Outdoor wall mounted capsule elevator, suitable for shopping malls & community buildings.',
    image: pHospitalElevator1,
  },
  {
    id: 2,
    name: 'Hospital Elevator 2',
    description: 'Outdoor wall mounted rectangular capsule elevator, transparent body for malls & industrial uses.',
    image: pHospitalElevator2,
  },
  {
    id: 3,
    name: 'Hospital Elevator 3',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pHospitalElevator3,
  },
  // {
  //   id: 4,
  //   name: 'Hospital Elevator 3',
  //   description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
  //   image: pHospitalElevator4,
  // },
 
];

const passengerElevators = [
  {
    id: 1,
    name: 'Passenger Elevator 1',
    description: 'Outdoor wall mounted capsule elevator, suitable for shopping malls & community buildings.',
    image: pPassengerElevator1,
  },
  {
    id: 2,
    name: 'Passenger Elevator 2',
    description: 'Outdoor wall mounted rectangular capsule elevator, transparent body for malls & industrial uses.',
    image: pPassengerElevator2,
  },
  {
    id: 3,
    name: 'Passenger Elevator 3',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pPassengerElevator3,
  },
  {
    id: 4,
    name: 'Passenger Elevator 4',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pPassengerElevator4,
  },
  {
    id: 5,
    name: 'Passenger Elevator 5',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pPassengerElevator5,
  },
  {
    id: 6,
    name: 'Passenger Elevator 6',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pPassengerElevator6,
  },
  {
    id: 7,
    name: 'Passenger Elevator 7',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pPassengerElevator7,
  },
  {
    id: 8,
    name: 'Passenger Elevator 8',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pPassengerElevator8,
  },
  {
    id: 9,
    name: 'Passenger Elevator 9',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pPassengerElevator9,
  },
  {
    id: 10,
    name: 'Passenger Elevator 10',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pPassengerElevator10,
  },
  {
    id: 11,
    name: 'Passenger Elevator 11',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pPassengerElevator11,
  },
 
];

const carElevators = [
  {
    id: 1,
    name: 'BDFE Car Elevator 1',
    image: pCarElevator1,
  },
  {
    id: 2,
    name: 'BDFE Car Elevator 2',
    image: pCarElevator2,
  },
];
const escalatorElevators = [
  {
    id: 1,
    name: 'Escalator Elevator 1',
    image: pEscalator1,
  },
  {
    id: 2,
    name: 'Escalator Elevator 2',
    image: pEscalator2,
  },
  {
    id: 3,
    name: 'Escalator Elevator 3',
    image: pEscalator3,
  },
];
const cargoElevators = [
  {
    id: 1,
    name: 'Cargo Elevator 1',
    image: pCargoElevator1,
  },
  {
    id: 2,
    name: 'Cargo Elevator 2',
    image: pCargoElevator2,
  },
  {
    id: 3,
    name: 'Cargo Elevator 3',
    image: pCargoElevator3,
  },
];


const Elevator = () => {
  return (
    <Container sx={{ py: 5, mt: 2 }}>
      {/* Observation Elevators Section */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 500 }}>
          Observation <span style={{ color: '#ff4d4d' }}>Elevator</span>
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
          Choose the best elevator from global brands
        </Button>
      </Box>

      <Grid container spacing={4}>
        {observationElevators.map((elevator) => (
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

      {/* Car Elevators Section */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 500 }}>
          Car <span style={{ color: '#ff4d4d' }}>Elevator</span>
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {carElevators.map((elevator) => (
            <Grid item xs={12} md={6} key={elevator.id}>
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
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Hospital ELevator */}
       <Typography variant="h4" component="h2" sx={{ fontWeight: 500, mt:10, mb:8 }}>
          Hospital <span style={{ color: '#ff4d4d' }}>Elevator</span>
        </Typography>

      <Grid container spacing={4}>
        {hospitalElevators.map((elevator) => (
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

      {/* Passenger ELevator */}
       <Typography variant="h4" component="h2" sx={{ fontWeight: 500, mt:10, mb:8 }}>
          Passenger <span style={{ color: '#ff4d4d' }}>Elevator</span>
        </Typography>

      <Grid container spacing={4}>
        {passengerElevators.map((elevator) => (
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

      {/* Escalator Elevators Section */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 500 }}>
          Escalator <span style={{ color: '#ff4d4d' }}>Elevator</span>
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {escalatorElevators.map((elevator) => (
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
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Cargo Elevators Section */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 500 }}>
          Cargo <span style={{ color: '#ff4d4d' }}>Elevator</span>
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {cargoElevators.map((elevator) => (
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
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Elevator