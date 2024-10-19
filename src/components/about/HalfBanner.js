'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import bannerImage from '../../assets/why-us.jpg' // Replace with your banner image
import Image from 'next/image'

const HalfBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
      }}
      ref={ref}
    >
      {/* Image Wrapper */}
      <motion.div
        variants={bannerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src={bannerImage}
          alt="About Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust opacity as needed
          zIndex: 1,
        }}
      />

      {/* Text Box */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          zIndex: 2, // Ensure the text is above the overlay
          textAlign: 'center',
          color: '#fff',
          padding: 2,
          borderRadius: 1,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
      </motion.div>
    </Box>
  )
}

export default HalfBanner
