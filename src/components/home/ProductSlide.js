'use client'

import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ProductSlide = ({ data, title, slidesToShow, firstR, secondR }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  const router = useRouter()

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: slidesToShow, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Large devices
        settings: {
          slidesToShow: firstR, // Adjust number of slides for large screens
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Medium devices (tablets)
        settings: {
          slidesToShow: secondR, // Fewer slides for medium screens
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480, // Small devices (mobile)
        settings: {
          slidesToShow: 1, // Show only one slide for mobile
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  const redirect = id => {
    router.push(`/our-products/category/${id}`)
  }

  return (
    <Box
      sx={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%', // Ensure it spans the full width of the container
      }}
      ref={ref}
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ width: '100%' }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            textAlign: 'center',
            mt: 5,
            fontSize: {
              xs: '1.5rem',
              sm: '3rem',
            },
          }}
        >
          {title}
        </Typography>
        <Slider {...sliderSettings}>
          {data.map((category, index) => (
            <div key={index} style={{ padding: '0 15px' }}>
              <CategoryCard
                title={category.title}
                description={category.description}
                image={category.image}
                id={category.id}
                redirectFunc={redirect}
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </Box>
  )
}

const CategoryCard = ({ title, image, redirectFunc, id }) => {
  return (
    <Box
      onClick={() => redirectFunc(id)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%', // Make the card span the full width
        height: '350px',
        padding: 2,
        borderRadius: 2,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Image
        src={image}
        alt={title}
        width={300} // Adjust width to fit within the slide
        height={200} // Adjust height to fit within the slide
        style={{
          borderRadius: '8px',
          marginBottom: '16px',
          objectFit: 'cover',
        }}
      />
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>
    </Box>
  )
}

export default ProductSlide
