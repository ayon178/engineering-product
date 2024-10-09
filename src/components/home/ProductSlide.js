"use client";

import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRouter } from "next/navigation";


const ProductSlide = ({data, title,slidesToShow, firstR, secondR}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const router = useRouter()

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px', // Adds spacing between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: firstR,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: secondR,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const redirect = (id) => {
    router.push(`/our-products/category/${id}`)
  }

  return (
    <Box
      sx={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      ref={ref}
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ width: "100%" }}
      >
        <Typography variant="h2" sx={{ mb: 4,textAlign:'center', mt:5 }}>
          {title}
        </Typography>
        <Slider {...sliderSettings}>
          {data.map((category, index) => (
            <div key={index}>
              <CategoryCard 
                style={{cursor:'pointer', zIndex:'100'}}
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
  );
};

const CategoryCard = ({ title, description, image,redirectFunc, id }) => {
  return (
    <Box
      onClick={() => redirectFunc(id)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "350px", 
        padding: 2,
        borderRadius: 2,
        textAlign: "center",
        margin: '0 10px',
        cursor: 'pointer',
      }}
    >
      <Image
        src={image}
        alt={title}
        width={350} 
        height={250} 
        style={{
          borderRadius: '8px',
          marginBottom: '16px',
          height: "250px", 
          objectFit: "cover", 
        }}
      />
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default ProductSlide;
