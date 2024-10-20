'use client'

import { Box, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import {
  pCargoElevator1,
  pEscalator1,
  pGenerator1,
  pSolarEquipment1,
} from '@/constant/images'
import { useRouter } from 'next/navigation'

// Example category data
const categoriesData = [
  {
    image: pCargoElevator1,
    title: 'Elevator',
    description: 'Explore our first category of products.',
    id: 1,
  },
  {
    image: pEscalator1,
    title: 'Escalator',
    description: 'Discover the second category with exciting offers.',
    id: 2,
  },
  {
    image: pGenerator1,
    title: 'Generator',
    description: 'Check out our third category of innovative products.',
    id: 3,
  },
  {
    image: pSolarEquipment1, // Replace with your image paths
    title: 'Solar Equipment',
    description: 'Explore our first category of products.',
    id: 4,
  },
]

const ProductCategories = ({ setId, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  const router = useRouter()

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px', // Adds spacing between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  const redirect = id => {
    setId(id)
  }

  return (
    <Box
      sx={{
        padding: '40px',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      ref={ref}
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ width: '100%' }}
      >
        <Typography variant="h2" sx={{ mb: 4 }}>
          Product Categories
        </Typography>
        <Slider {...sliderSettings}>
          {categoriesData.map((category, index) => (
            <div key={index}>
              <CategoryCard
                style={{ cursor: 'pointer', zIndex: '100' }}
                title={category.title}
                description={category.description}
                image={category.image}
                id={category.id}
                passedId={id}
                redirectFunc={redirect}
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </Box>
  )
}

const CategoryCard = ({
  title,
  description,
  image,
  redirectFunc,
  id,
  passedId,
}) => {
  const isSelected = passedId === id

  return (
    <Box
      onClick={() => redirectFunc(id)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '350px',
        padding: 2,
        borderRadius: 2,
        boxShadow: isSelected
          ? '0 4px 20px rgba(0, 0, 0, 0.2)'
          : '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: isSelected ? '#f0f8ff' : '#fff', // Light blue for selected, white for default
        textAlign: 'center',
        margin: '0 10px',
        cursor: 'pointer',
        border: isSelected ? '2px solid #FF4D4D' : '1px solid #e0e0e0', // Primary color for selected
        transform: isSelected ? 'scale(0.93)' : 'scale(1)', // Slight scale effect when selected
        transition: 'all 0.3s ease-in-out', // Smooth transition for changes
      }}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        style={{ borderRadius: '8px', marginBottom: '16px', height: '200px' }}
      />
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  )
}

export default ProductCategories
