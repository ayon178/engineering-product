'use client'

import { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { slider1, slider2, slider3 } from '@/constant/images'
import { COLORS } from '@/constant/constant'

// Example images and content data for the slider
const sliderData = [
  {
    image: slider2,
    heading: 'High-Quality Products',
    subHeading: 'Built to Last',
    cta: 'Shop Now',
    link: '/products',
  },
  {
    image: slider1,
    heading: 'Innovative Engineering Solutions',
    subHeading: 'Leading the Future of Engineering',
    cta: 'Learn More',
    link: '/products',
  },
  {
    image: slider3,
    heading: 'Customer Satisfaction Guaranteed',
    subHeading: 'Your Trust, Our Commitment',
    cta: 'Contact Us',
    link: '/contact',
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Automatically change slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 1, ease: 'easeInOut' },
    },
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence>
        {sliderData.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 1.2, // Slight zoom-out start
                  clipPath: 'circle(0% at 50% 50%)', // Ripple starts from center (0% size)
                }}
                animate={{
                  opacity: 1,
                  scale: 1, // Zoom into normal size
                  clipPath: 'circle(150% at 50% 50%)', // Ripple expands out to reveal the image
                }}
                exit={{
                  opacity: 0,
                  scale: 1.2, // Slight zoom-out on exit
                  clipPath: 'circle(0% at 50% 50%)', // Ripple shrinks back to center
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut', // Smooth easing for ripple effect
                }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${slide.image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FFCC33]/10 via-[#FFCC33]/20 to-transparent opacity-20 rounded-full"
                  style={{
                    width: '100px',
                    height: '100px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 0.4,
                    scale: 15, // Scale the ripple outward
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 2, // Slower ripple expansion for added depth
                    ease: 'easeOut',
                  }}
                />
                {/* Black overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    position: 'relative',
                    textAlign:
                      index === 0 ? 'left' : index === 2 ? 'right' : 'center',
                    paddingLeft:
                      index === 0 ? { xs: '10px', sm: '1rem', lg: '4rem' } : 0,
                    paddingRight:
                      index === 2 ? { xs: '10px', sm: '1rem', lg: '4rem' } : 0,
                  }}
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: {
                          xs: '1.5rem',
                          sm: '2rem',
                          md: '2.5rem',
                        },
                        color: 'white',
                      }}
                    >
                      {slide.heading}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        fontSize: {
                          xs: '1rem',
                          sm: '1.25rem',
                          md: '1.5rem',
                        },
                        color: 'white',
                      }}
                    >
                      {slide.subHeading}
                    </Typography>
                    <Button
                      variant="contained"
                      href={slide.link}
                      sx={{
                        backgroundColor: COLORS.secondMain,
                        fontWeight: 'bold',
                        fontSize: { xs: '0.875rem' },
                        padding: { xs: '10px 20px', sm: '12px 24px' },
                        color: '#fff',
                      }}
                    >
                      {slide.cta}
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </Box>
  )
}

export default Slider
