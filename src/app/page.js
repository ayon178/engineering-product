'use client'

import AboutUs from '@/components/home/AboutUs'
import AskForQuote from '@/components/home/AskForQuote'
import BrandList from '@/components/home/BrandList'
import CommitmentSection from '@/components/home/CommitmentSection'
import CoreFeaturesSection from '@/components/home/CoreFeaturesSection'
import MechanicalEngineering from '@/components/home/MechanicalEngineering'
import OurProducts from '@/components/home/OurProducts'
import PreviousProjects from '@/components/home/PreviousProjects'
import PriceQuote from '@/components/home/PriceQuote'
import ProductCategories from '@/components/home/ProductCategories'
import ProductSlide from '@/components/home/ProductSlide'
import ServiceSection from '@/components/home/ServiceSection'
import Slider2 from '@/components/shared/slider/Slider2'
import Slider from '@/components/shared/slider/Slider'
import {
  pCarElevator1,
  pCarElevator2,
  pCargoElevator1,
  pCargoElevator2,
  pCargoElevator3,
  pHospitalElevator1,
  pHospitalElevator2,
  pHospitalElevator3,
  pHospitalElevator4,
  pObservatiorElevator1,
  pObservatiorElevator2,
  pObservatiorElevator3,
  pObservatiorElevator4,
  pObservatiorElevator5,
  pPassengerElevator1,
  pPassengerElevator10,
  pPassengerElevator11,
  pPassengerElevator2,
  pPassengerElevator3,
  pPassengerElevator4,
  pPassengerElevator5,
  pPassengerElevator6,
  pPassengerElevator7,
  pPassengerElevator8,
  pPassengerElevator9,
  pGenerator1,
  pGenerator2,
  pGenerator3,
  pGenerator5,
  pSolarEquipment1,
  pSolarEquipment2,
  pSolarEquipment3,
} from '@/constant/images'
import { Typography } from '@mui/material'

const elevator = [
  // {
  //   image: pCarElevator1,
  //   title: 'Car Elevator',
  //   description: 'Explore our first category of products.',
  //   id: 1,
  // },
  // {
  //   image: pCargoElevator2,
  //   title: 'Cargo Elevator',
  //   description: 'Explore another version of our Cargo Elevators.',
  //   id: 1,
  // },
  // {
  //   image: pCargoElevator3,
  //   title: 'Cargo Elevator',
  //   description: 'Discover the latest innovations in Cargo Elevators.',
  //   id: 1,
  // },
  {
    image: pHospitalElevator1,
    title: 'Hospital Elevator',
    description: 'Specially designed elevators for hospitals.',
    id: 1,
  },
  {
    image: pHospitalElevator2,
    title: 'Hospital Elevator',
    description: 'Advanced hospital elevators for efficient transport.',
    id: 1,
  },
  {
    image: pHospitalElevator3,
    title: 'Hospital Elevator',
    description: 'Innovative solutions for hospital elevators.',
    id: 1,
  },
  {
    image: pHospitalElevator4,
    title: 'Hospital Elevator',
    description: 'Reliable elevators designed for healthcare facilities.',
    id: 1,
  },
  {
    image: pObservatiorElevator1,
    title: 'Observatory Elevator',
    description: 'Elevators designed for observation decks.',
    id: 1,
  },
  {
    image: pObservatiorElevator2,
    title: 'Observatory Elevator',
    description: 'Experience the view with our observatory elevators.',
    id: 1,
  },
  {
    image: pObservatiorElevator3,
    title: 'Observatory Elevator',
    description: 'Explore the heights with our elevators.',
    id: 1,
  },
  {
    image: pObservatiorElevator4,
    title: 'Observatory Elevator',
    description: 'Designed for stunning views.',
    id: 1,
  },
  {
    image: pObservatiorElevator5,
    title: 'Observatory Elevator',
    description: 'Unique designs for observatory elevators.',
    id: 1,
  },
  {
    image: pPassengerElevator1,
    title: 'Passenger Elevator',
    description: 'Comfortable elevators for passengers.',
    id: 1,
  },
  {
    image: pPassengerElevator2,
    title: 'Passenger Elevator',
    description: 'Experience modern passenger elevators.',
    id: 1,
  },
  {
    image: pPassengerElevator3,
    title: 'Passenger Elevator',
    description: 'Elevators designed for smooth transportation.',
    id: 1,
  },
  {
    image: pPassengerElevator4,
    title: 'Passenger Elevator',
    description: 'Efficient solutions for passenger transportation.',
    id: 1,
  },
  {
    image: pPassengerElevator5,
    title: 'Passenger Elevator',
    description: 'Explore our stylish passenger elevators.',
    id: 1,
  },
  {
    image: pPassengerElevator6,
    title: 'Passenger Elevator',
    description: 'Advanced features for your convenience.',
    id: 1,
  },
  {
    image: pPassengerElevator7,
    title: 'Passenger Elevator',
    description: 'Reliability meets design in our elevators.',
    id: 1,
  },
  {
    image: pPassengerElevator8,
    title: 'Passenger Elevator',
    description: 'Sophisticated elevators for modern buildings.',
    id: 1,
  },
  {
    image: pPassengerElevator9,
    title: 'Passenger Elevator',
    description: 'Exceptional performance and design.',
    id: 1,
  },
  {
    image: pPassengerElevator10,
    title: 'Passenger Elevator',
    description: 'Explore our wide range of passenger elevators.',
    id: 1,
  },
  {
    image: pPassengerElevator11,
    title: 'Passenger Elevator',
    description: 'Innovative solutions for efficient transport.',
    id: 1,
  },
]

const generatorSubstation = [
  {
    id: 3,
    name: 'Generator Substation 1',
    description:
      'Outdoor wall mounted capsule elevator, suitable for shopping malls & community buildings.',
    image: pGenerator1,
  },
  {
    id: 3,
    name: 'Generator Substation 2',
    description:
      'Outdoor wall mounted rectangular capsule elevator, transparent body for malls & industrial uses.',
    image: pGenerator2,
  },
  {
    id: 3,
    name: 'Generator Substation 3',
    description:
      'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pGenerator3,
  },
  {
    id: 3,
    name: 'Generator Substation 4',
    description:
      'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pGenerator5,
  },
]

const solarEquipment = [
  {
    id: 4,
    name: 'Solar Elevator 1',
    description:
      'Outdoor wall mounted capsule elevator, suitable for shopping malls & community buildings.',
    image: pSolarEquipment1,
  },
  {
    id: 4,
    name: 'Solar Elevator 2',
    description:
      'Outdoor wall mounted rectangular capsule elevator, transparent body for malls & industrial uses.',
    image: pSolarEquipment2,
  },
  {
    id: 4,
    name: 'Solar Elevator 3',
    description:
      'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pSolarEquipment3,
  },
]

export default function Home() {
  return (
    <>
      {/* <Slider /> */}
      <Slider2 />
      <AboutUs />
      <CoreFeaturesSection />
      <PriceQuote />
      {/* <OurProducts /> */}

      {/* <CommitmentSection /> */}
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mt: 10,
          fontSize: {
            xs: '1.8rem',
            sm: '3.5rem',
          },
          borderBottom: '2px solid #FF4D4D',
          width: 'fit-content',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Our Products
      </Typography>

      <ProductSlide
        data={elevator}
        title="Elevators & Escalator"
        slidesToShow={5}
        firstR={3}
        secondR={2}
      />
      <ProductSlide
        data={generatorSubstation}
        title="Generator & Substations"
        slidesToShow={5}
        firstR={3}
        secondR={2}
      />
      <ProductSlide
        data={solarEquipment}
        title="Solar System"
        slidesToShow={4}
        firstR={3}
        secondR={2}
      />
      <BrandList />
      {/* <ProductCategories /> */}
      {/* <PreviousProjects /> */}
      <AskForQuote />
    </>
  )
}

// 'use client'
// // pages/index.js

// import { Container, Typography, Button } from '@mui/material'
// import { motion } from 'framer-motion'

// const pageVariants = {
//   initial: { opacity: 0, y: 100 },
//   in: { opacity: 1, y: 0 },
//   out: { opacity: 0, y: -50 },
// }

// const titleVariants = {
//   initial: { scale: 0.8, opacity: 0 },
//   in: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
// }

// const subtitleVariants = {
//   initial: { x: -100, opacity: 0 },
//   in: { x: 0, opacity: 1, transition: { duration: 0.5 } },
// }

// export default function ComingSoon() {
//   return (
//     <Container
//       component={motion.div}
//       variants={pageVariants}
//       initial="initial"
//       animate="in"
//       exit="out"
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         bgcolor: 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradient background
//         // color: '#fff',
//         textAlign: 'center',
//         padding: 2,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <motion.div variants={titleVariants}>
//         <Typography variant="h2" gutterBottom>
//           Coming Soon!
//         </Typography>
//       </motion.div>
//       <motion.div variants={subtitleVariants}>
//         <Typography variant="h5" gutterBottom>
//           We&apos;re working hard to launch our new site.
//         </Typography>
//       </motion.div>

//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{
//           scale: 1,
//           opacity: 0.1,
//           transition: { duration: 2, ease: 'easeInOut' },
//         }}
//         exit={{ scale: 0.8, opacity: 0 }}
//         sx={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: '50%',
//           background: 'rgba(0, 0, 0, 0.2)', // Semi-transparent overlay
//         }}
//       />
//     </Container>
//   )
// }
