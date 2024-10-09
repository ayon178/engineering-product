import AboutUs from "@/components/home/AboutUs";
import AskForQuote from "@/components/home/AskForQuote";
import BrandList from "@/components/home/BrandList";
import OurProducts from "@/components/home/OurProducts";
import PreviousProjects from "@/components/home/PreviousProjects";
import PriceQuote from "@/components/home/PriceQuote";
import ProductCategories from "@/components/home/ProductCategories";
import ProductSlide from "@/components/home/ProductSlide";
import Slider from "@/components/shared/slider/Slider";
import { pCarElevator1, pCarElevator2, pCargoElevator1, pCargoElevator2, pCargoElevator3, pHospitalElevator1, pHospitalElevator2, pHospitalElevator3, pHospitalElevator4, pObservatiorElevator1, pObservatiorElevator2, pObservatiorElevator3, pObservatiorElevator4, pObservatiorElevator5, pPassengerElevator1, pPassengerElevator10, pPassengerElevator11, pPassengerElevator2, pPassengerElevator3, pPassengerElevator4, pPassengerElevator5, pPassengerElevator6, pPassengerElevator7, pPassengerElevator8, pPassengerElevator9,pGenerator1, pGenerator2, pGenerator3, pGenerator5,pSolarEquipment1, pSolarEquipment2, pSolarEquipment3 } from '@/constant/images';

const elevator = [
  {
    image: pCarElevator1,
    title: "Car Elevator",
    description: "Explore our first category of products.",
    id: 1,
  },
  {
    image: pCargoElevator2,
    title: "Cargo Elevator",
    description: "Explore another version of our Cargo Elevators.",
    id: 4,
  },
  {
    image: pCargoElevator3,
    title: "Cargo Elevator",
    description: "Discover the latest innovations in Cargo Elevators.",
    id: 5,
  },
  {
    image: pHospitalElevator1,
    title: "Hospital Elevator",
    description: "Specially designed elevators for hospitals.",
    id: 9,
  },
  {
    image: pHospitalElevator2,
    title: "Hospital Elevator",
    description: "Advanced hospital elevators for efficient transport.",
    id: 10,
  },
  {
    image: pHospitalElevator3,
    title: "Hospital Elevator",
    description: "Innovative solutions for hospital elevators.",
    id: 11,
  },
  {
    image: pHospitalElevator4,
    title: "Hospital Elevator",
    description: "Reliable elevators designed for healthcare facilities.",
    id: 12,
  },
  {
    image: pObservatiorElevator1,
    title: "Observatory Elevator",
    description: "Elevators designed for observation decks.",
    id: 13,
  },
  {
    image: pObservatiorElevator2,
    title: "Observatory Elevator",
    description: "Experience the view with our observatory elevators.",
    id: 14,
  },
  {
    image: pObservatiorElevator3,
    title: "Observatory Elevator",
    description: "Explore the heights with our elevators.",
    id: 15,
  },
  {
    image: pObservatiorElevator4,
    title: "Observatory Elevator",
    description: "Designed for stunning views.",
    id: 16,
  },
  {
    image: pObservatiorElevator5,
    title: "Observatory Elevator",
    description: "Unique designs for observatory elevators.",
    id: 17,
  },
  {
    image: pPassengerElevator1,
    title: "Passenger Elevator",
    description: "Comfortable elevators for passengers.",
    id: 18,
  },
  {
    image: pPassengerElevator2,
    title: "Passenger Elevator",
    description: "Experience modern passenger elevators.",
    id: 19,
  },
  {
    image: pPassengerElevator3,
    title: "Passenger Elevator",
    description: "Elevators designed for smooth transportation.",
    id: 20,
  },
  {
    image: pPassengerElevator4,
    title: "Passenger Elevator",
    description: "Efficient solutions for passenger transportation.",
    id: 21,
  },
  {
    image: pPassengerElevator5,
    title: "Passenger Elevator",
    description: "Explore our stylish passenger elevators.",
    id: 22,
  },
  {
    image: pPassengerElevator6,
    title: "Passenger Elevator",
    description: "Advanced features for your convenience.",
    id: 23,
  },
  {
    image: pPassengerElevator7,
    title: "Passenger Elevator",
    description: "Reliability meets design in our elevators.",
    id: 24,
  },
  {
    image: pPassengerElevator8,
    title: "Passenger Elevator",
    description: "Sophisticated elevators for modern buildings.",
    id: 25,
  },
  {
    image: pPassengerElevator9,
    title: "Passenger Elevator",
    description: "Exceptional performance and design.",
    id: 26,
  },
  {
    image: pPassengerElevator10,
    title: "Passenger Elevator",
    description: "Explore our wide range of passenger elevators.",
    id: 27,
  },
  {
    image: pPassengerElevator11,
    title: "Passenger Elevator",
    description: "Innovative solutions for efficient transport.",
    id: 28,
  },
];

const generatorSubstation = [
  {
    id: 1,
    name: 'Generator Substation 1',
    description: 'Outdoor wall mounted capsule elevator, suitable for shopping malls & community buildings.',
    image: pGenerator1,
  },
  {
    id: 2,
    name: 'Generator Substation 2',
    description: 'Outdoor wall mounted rectangular capsule elevator, transparent body for malls & industrial uses.',
    image: pGenerator2,
  },
  {
    id: 3,
    name: 'Generator Substation 3',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pGenerator3,
  },
  {
    id: 4,
    name: 'Generator Substation 4',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pGenerator5,
  },
  
 
];

const solarEquipment = [
  {
    id: 1,
    name: 'Solar Elevator 1',
    description: 'Outdoor wall mounted capsule elevator, suitable for shopping malls & community buildings.',
    image: pSolarEquipment1,
  },
  {
    id: 2,
    name: 'Solar Elevator 2',
    description: 'Outdoor wall mounted rectangular capsule elevator, transparent body for malls & industrial uses.',
    image: pSolarEquipment2,
  },
  {
    id: 3,
    name: 'Solar Elevator 3',
    description: 'Indoor circular view capsule elevator, inner body toned with wooden texture for villas & residential use.',
    image: pSolarEquipment3,
  },
  
 
];


export default function Home() {
  return (
    <>
      <Slider />
      <AboutUs />
      <PriceQuote />
      <OurProducts />
      <ProductSlide data={elevator} title="Elevators & Escalator" slidesToShow={5} firstR={3} secondR={2} />
      <ProductSlide data={generatorSubstation} title="Generator & Substations" slidesToShow={5} firstR={3} secondR={2}/>
      <ProductSlide data={solarEquipment} title="Solar System" slidesToShow={4} firstR={3} secondR={2} />
      <BrandList />
      {/* <ProductCategories /> */}
      <PreviousProjects />
      <AskForQuote />
    </>
  );
}
