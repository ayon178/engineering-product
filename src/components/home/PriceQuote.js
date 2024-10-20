'use client'

import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  car,
  elevator1,
  escelator1,
  escelator2,
  generator1,
  passenger1,
} from '@/constant/images'
import { COLORS } from '@/constant/constant'
import { useRouter } from 'next/navigation'

const quoteImages = [
  {
    image: escelator1,
    title: 'Escalator',
    description: 'Discover the second category with exciting offers.',
    id: 2,
  },
  {
    image: elevator1,
    title: 'Elevator',
    description: 'Explore our first category of products.',
    id: 1,
  },
  {
    image: escelator2,
    title: 'Generator',
    description: 'Check out our third category of innovative products.',
    id: 2,
  },
  {
    image: generator1,
    title: 'Solar Equipment',
    description: 'Explore our first category of products.',
    id: 3,
  },
  {
    image: passenger1,
    title: 'Solar Equipment',
    description: 'Explore our first category of products.',
    id: 2,
  },
  {
    image: car,
    title: 'Solar Equipment',
    description: 'Explore our first category of products.',
    id: 2,
  },
]

const TopSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/construction_yellow_background.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    height: 'auto',
    padding: theme.spacing(2),
  },
}))

const ImageGridItemWrapper = styled(Box)(({ theme }) => ({
  overflow: 'hidden', // Prevents the hover zoom from overlapping
}))

const ImageGridItem = styled(Box)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px',
  position: 'relative',
  color: '#fff',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  transformOrigin: 'center', // Ensures the zoom effect scales from the center

  // Add hover effect
  '&:hover': {
    transform: 'scale(1.05)', // Slight zoom-in effect on hover
    '& button': {
      backgroundColor: COLORS.secondMain, // Change button color on hover
      color: '#fff',
    },
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  '& *': {
    position: 'relative',
    zIndex: 1,
  },
}))

const PriceQuote = () => {
  const router = useRouter()

  // Animation variants for each item
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <Box>
      {/* Top Section */}
      <TopSection>
        <Typography
          variant="h6"
          sx={{
            width: { xs: '100%', md: '40%' },
            color: '#fff',
            fontSize: { xs: '1.5rem', md: '1.8rem' },
            fontWeight: 400,
            marginBottom: { xs: 2, md: 0 },
          }}
          className="montserrat_font"
        >
          LOOKING FOR THE BEST QUALITY AND AFFORDABLE LIFT FOR YOUR{' '}
          <span style={{ fontWeight: 600, color: '#000' }}>BUILDING?</span>
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            border: `2px solid ${COLORS.secondMain}`,
            color: '#fff',
            fontFamily: 'Montserrat, Bangla386, sans-serif',
            backgroundColor: COLORS.secondMain,
            transition: 'background-color 0.3s, color 0.3s',
            fontSize: '1rem',
            fontWeight: '700',
            paddingY: '8px',
            '&:hover': {
              backgroundColor: '#000',
              color: '#f26622',
              border: '2px solid #000',
            },
          }}
        >
          REQUEST A PRICE QUOTE
        </Button>
      </TopSection>

      {/* Bottom Section - Image Grid */}
      <Box>
        <Grid container>
          {quoteImages.map((item, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.1,
            })

            return (
              <Grid item xs={12} md={4} key={index} ref={ref}>
                <motion.div
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={variants}
                >
                  <ImageGridItemWrapper>
                    <ImageGridItem
                      sx={{ backgroundImage: `url(${item.image.src})` }}
                      onClick={() =>
                        router.push(`/our-products/category/${item.id}`)
                      }
                    >
                      <Typography
                        variant="h5"
                        style={{
                          borderBottom: '2px solid #f26622',
                          width: 'fit-content',
                          paddingTop: 50,
                          paddingBottom: 20,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          width: 'fit-content',
                          background: '#FFFF00',
                          color: COLORS.secondMain,
                          fontWeight: 'bold',
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        Learn More
                      </Button>
                    </ImageGridItem>
                  </ImageGridItemWrapper>
                </motion.div>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default PriceQuote
