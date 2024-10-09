'use client'

import React from 'react';
import { Card, CardContent, Typography, Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutImg } from '@/constant/images';
import { COLORS } from '@/constant/constant';

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        p: { xs: 4, md: 6 },  // Increased padding
        maxWidth: '1400px',   // Increased width
        margin: '0 auto', 
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
        <Image src={aboutImg} alt="About Us Image" layout="responsive" width={600} height={350} />  {/* Increased Image size */}
      </Box>

      {/* Right - Text Content Section inside a Card */}
      <Card
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        sx={{
          flex: 1,
          ml: { md: 4 },
          p: 3,  // Increased padding
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',  // Slightly stronger shadow
          borderRadius: 3,  // Slightly increased border radius
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <CardContent>
          <Typography variant="subtitle2" component="p" sx={{color:COLORS.secondMain, fontSize: '1.2rem'}} gutterBottom>
            WHO WE ARE
          </Typography>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, color:'#191D4C', fontWeight:'bold' }}>
            We are leaders in the building sector
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph sx={{ fontSize: { xs: '1.125rem', md: '1.25rem' } }}>
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
          </Typography>

          <List sx={{ mb: 2 }}>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText primary="• Individual approach" sx={{ color: 'text.secondary' }} />
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText primary="• Technical architecture" sx={{ color: 'text.secondary' }} />
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText primary="• Customer support" sx={{ color: 'text.secondary' }} />
            </ListItem>
          </List>

          <Button sx={{ mt: 3, background: COLORS.secondMain, color: 'white', px: 10, py: 2.5, fontSize: '1.1rem' }}>
            About Us
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutUs;
