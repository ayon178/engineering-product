import DescriptionSection from '@/components/about/DescriptionSection'
import HalfBanner from '@/components/about/HalfBanner'
import OurBrands from '@/components/about/OurBrands'
import AboutUs from '@/components/home/AboutUs'
import CoreFeaturesSection from '@/components/home/CoreFeaturesSection'

const AboutPage = () => {
  return (
    <>
      <HalfBanner />
      {/* <DescriptionSection /> */}
      <AboutUs />
      <CoreFeaturesSection />
      <OurBrands />
    </>
  )
}

export default AboutPage
