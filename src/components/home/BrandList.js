import { Box, Button, Typography, Grid } from '@mui/material'
import React from 'react'

import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
} from '@/constant/images'
import Image from 'next/image'

const BrandList = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: '1rem',
          md: '4rem',
        },
      }}
    >
      <Grid container spacing={2}>
        {/* Left Section: Heading and Paragraph */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 2,
              fontSize: {
                xs: '1.2rem',
                sm: '2rem',
              },
            }}
          >
            Our Brands
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.5rem',
              color: 'text.secondary',
              fontSize: {
                xs: '0.8rem',
                sm: '1.2rem',
              },
            }}
          >
            We provide a wide range of services to help you achieve your goals.
            Explore our services below and see how we can assist you.
          </Typography>
        </Grid>

        {/* Right Section: Cards with Icons and Titles */}
        <Grid item xs={12} md={6}>
          {/* 3 Cards horizontally aligned */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: {
                xs: '.2rem',
                md: '1rem',
              },
            }}
          >
            <Button sx={cardStyles}>
              <Box
                sx={{
                  padding: {
                    xs: '.2rem .4rem',
                    md: '1rem 2rem',
                  },
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                }}
              >
                <Image src={brand1} layout="fill" objectFit="contain" />
              </Box>
            </Button>

            <Button sx={cardStyles}>
              <Box
                sx={{
                  padding: {
                    xs: '.2rem .4rem',
                    md: '1rem 2rem',
                  },
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                }}
              >
                <Image src={brand2} layout="fill" objectFit="contain" />
              </Box>
            </Button>

            <Button sx={cardStyles}>
              <Box
                sx={{
                  padding: {
                    xs: '.2rem .4rem',
                    md: '1rem 2rem',
                  },
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                }}
              >
                <Image src={brand3} layout="fill" objectFit="contain" />
              </Box>
            </Button>
          </Box>

          {/* 2 Cards Right-Aligned and Centered */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center', // Align cards to the right
              gap: {
                xs: '.2rem',
                md: '1rem',
              },
              marginTop: '2rem',
            }}
          >
            <Button sx={cardStyles}>
              <Box
                sx={{
                  padding: {
                    xs: '.2rem .4rem',
                    md: '1rem 2rem',
                  },
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                }}
              >
                <Image src={brand4} layout="fill" objectFit="contain" />
              </Box>
            </Button>

            <Button sx={cardStyles}>
              <Box
                sx={{
                  padding: {
                    xs: '.2rem .4rem',
                    md: '1rem 2rem',
                  },
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                }}
              >
                <Image src={brand5} layout="fill" objectFit="contain" />
              </Box>
            </Button>
          </Box>

          {/* 4 Cards horizontally aligned */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: {
                xs: '.2rem',
                md: '1rem',
              },
            }}
          >
            <Button sx={cardStyles}>
              <Box
                sx={{
                  padding: {
                    xs: '.2rem .4rem',
                    md: '1rem 2rem',
                  },
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                }}
              >
                <Image src={brand6} layout="fill" objectFit="contain" />
              </Box>
            </Button>

            <Button sx={cardStyles}>
              <Box
                sx={{
                  padding: {
                    xs: '.2rem .4rem',
                    md: '1rem 2rem',
                  },
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                }}
              >
                <Image src={brand7} layout="fill" objectFit="contain" />
              </Box>
            </Button>

            <Button sx={cardStyles}>
              <Box
                sx={{
                  padding: {
                    xs: '.2rem .4rem',
                    md: '1rem 2rem',
                  },
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                }}
              >
                <Image src={brand8} layout="fill" objectFit="contain" />
              </Box>
            </Button>

            <Button sx={cardStyles}>
              <Box
                sx={{
                  padding: {
                    xs: '.2rem .4rem',
                    md: '1rem 2rem',
                  },
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                }}
              >
                <Image src={brand9} layout="fill" objectFit="contain" />
              </Box>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

// Reusable card style
const cardStyles = {
  borderRadius: '0.375rem',
  cursor: 'pointer',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20rem',
  // boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', // Increased shadow
  transition: 'box-shadow 0.3s ease',
  // '&:hover': {
  //   boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)', // Darker shadow on hover
  // },
}

export default BrandList
