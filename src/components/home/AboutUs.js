'use client'

import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { COLORS } from '@/constant/constant'

const AboutUs = ({ img }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <Container maxWidth="lg">
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1400px', // Increased width
          margin: '10px auto',
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Left - Image Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          sx={{
            flex: 1,
            mb: { xs: 2, md: 0 },
            textAlign: 'center',
          }}
        >
          <Image
            src={img}
            alt="About Us Image"
            layout="responsive"
            width={600}
            height={350}
            style={{ borderRadius: '10px' }}
          />{' '}
          {/* Increased Image size */}
        </Box>

        {/* Right - Text Content Section inside a Card */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          sx={{
            flex: 1,
            ml: { md: 4 },

            // boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)', // Slightly stronger shadow
            borderRadius: 3, // Slightly increased border radius
            textAlign: { xs: 'center', md: 'left' },
            border: 0,
          }}
        >
          <CardContent>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: COLORS.secondMain, fontSize: '1rem' }}
              gutterBottom
            >
              WHO WE ARE
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontSize: { xs: '1rem', md: '2.4rem' },
                color: '#191D4C',
                fontWeight: 'bold',
              }}
            >
              We are leaders in the building sector
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              paragraph
              sx={{ fontSize: { xs: '.8rem', md: '1.25rem' }, mb: 0 }}
            >
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </Typography>

            <List sx={{ mb: 2, mt: 1, textAlign: 'center' }}>
              <ListItem sx={{ padding: 0 }}>
                <ListItemText
                  primary="• Individual approach"
                  sx={{ color: 'text.secondary' }}
                />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemText
                  primary="• Technical architecture"
                  sx={{ color: 'text.secondary' }}
                />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemText
                  primary="• Customer support"
                  sx={{ color: 'text.secondary' }}
                />
              </ListItem>
            </List>

            <Button
              sx={{
                background: COLORS.secondMain,
                color: 'white',
                px: {
                  xs: 4,
                  sm: 7,
                  md: 10,
                },
                py: 2.5,
                fontSize: '1.1rem',
              }}
            >
              About Us
            </Button>
          </CardContent>
        </Box>
      </Box>
    </Container>
  )
}

export default AboutUs
