import DescriptionSection from '@/components/about/DescriptionSection'
import HalfBanner from '@/components/about/HalfBanner'
import OurBrands from '@/components/about/OurBrands'
import AboutUs from '@/components/home/AboutUs'
import CoreFeaturesSection from '@/components/home/CoreFeaturesSection'
import { aboutImg, aboutImg2 } from '@/constant/images'

const AboutPage = () => {
  return (
    <>
      <HalfBanner />
      {/* <DescriptionSection /> */}
      <AboutUs img={aboutImg} />
      <AboutUs img={aboutImg2} />
      <CoreFeaturesSection />
      <OurBrands />
    </>
  )
}

export default AboutPage
