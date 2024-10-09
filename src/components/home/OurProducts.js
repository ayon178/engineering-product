"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  pCargoElevator1,
  pEscalator1,
  pGenerator1,
  pHospitalElevator1,
  pObservatiorElevator1,
  pPassengerElevator1,
  pSolarEquipment1,
} from "@/constant/images";
import Image from "next/image";
import { COLORS } from "@/constant/constant";

// Example category data
const categoryData = [
  {
    image: pCargoElevator1,
    heading: "Elevator",
  },
  {
    image: pEscalator1,
    heading: "Escalator",
  },
  {
    image: pGenerator1,
    heading: "Generator",
  },
  {
    image: pHospitalElevator1,
    heading: "Hospital Elevator",
  },
  {
    image: pPassengerElevator1,
    heading: "Passenger Elevator",
  },
  {
    image: pSolarEquipment1,
    heading: "Solar Equipment",
  },
  {
    image: pObservatiorElevator1,
    heading: "Observatior Elevator",
  },
];

const ProductCard = ({ image, heading }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{
        width: "300px", // Adjust width of each card
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginRight: "20px", // Add margin to space between cards
        flexShrink: 0, // Prevent card from shrinking in flex container
      }}
    >
      {/* Image with no overlay */}
      <Box
        sx={{
          width: "100%",
          height: "320px", // Adjust image size
          borderRadius: "8px",
          overflow: "hidden", // Ensure image stays within card boundaries
          position: "relative", // Add relative positioning for Next.js Image
        }}
      >
        <Image
          src={image.src}
          alt={heading}
          fill
          style={{
            objectFit: "cover", // Ensure image covers the container
          }}
        />
      </Box>

      {/* Heading below image */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, color:COLORS.secondMain }}>
        {heading}
      </Typography>
    </motion.div>
  );
};

const OurProducts = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: "20px 10px",
          md:"40px 60px"
        }, // Padding at top and bottom
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden", // Ensure no overflow on X-axis
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Category
      </Typography>

      <Box
        component={motion.div}
        sx={{
          display: "flex",
          overflowX: "auto", // Horizontal scroll
          overflowY: "hidden", // Prevent vertical scroll
          paddingBottom: "20px",
          width: "100%",
          scrollSnapType: "x mandatory", // Snap scroll behavior
          scrollbarWidth: "thin", // Thin scrollbar for Firefox
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {categoryData.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            heading={product.heading}
          />
        ))}
      </Box>
      </Box>
  );
};

export default OurProducts;
