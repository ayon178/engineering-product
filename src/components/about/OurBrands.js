'use client'

import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  CardActions,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import BrandIcon1 from '@mui/icons-material/AddHomeWork'
import BrandIcon2 from '@mui/icons-material/AccountBalance'
import BrandIcon3 from '@mui/icons-material/Business'
import BrandIcon4 from '@mui/icons-material/Build'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

const brandsData = [
  {
    icon: brand1,
    link: 'https://brand1.com',
    alt: 'Brand 1',
  },
  {
    icon: brand2,
    link: 'https://brand2.com',
    alt: 'Brand 2',
  },
  {
    icon: brand3,
    link: 'https://brand3.com',
    alt: 'Brand 3',
  },
  {
    icon: brand4,
    link: 'https://brand4.com',
    alt: 'Brand 4',
  },
  {
    icon: brand5,
    link: 'https://brand4.com',
    alt: 'Brand 5',
  },
  {
    icon: brand6,
    link: 'https://brand4.com',
    alt: 'Brand 6',
  },
  {
    icon: brand7,
    link: 'https://brand4.com',
    alt: 'Brand 7',
  },
  {
    icon: brand8,
    link: 'https://brand4.com',
    alt: 'Brand 8',
  },
  {
    icon: brand9,
    link: 'https://brand4.com',
    alt: 'Brand 9',
  },
  // Add more brands as needed
]

const OurBrands = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const brandsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Box
      sx={{
        padding: '40px',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px',
      }}
      ref={ref}
    >
      <motion.div
        variants={brandsVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ width: '100%' }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontSize: {
              xs: '1.5rem',
              sm: '3rem',
            },
          }}
        >
          Our Brands
        </Typography>
        <Slider {...sliderSettings}>
          {brandsData.map((brand, index) => (
            <div key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: '0 auto',
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease-in-out',
                  height: '200px',
                  padding: '1rem 2rem',
                  '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    // padding: 2,
                    width: '80%',
                    height: '80%',
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  {/* <Link href={brand.link} passHref> */}
                  <Image
                    src={brand.icon.src}
                    layout="fill"
                    objectFit="contain"
                  />
                  {/* </Link> */}
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </motion.div>
    </Box>
  )
}

export default OurBrands
