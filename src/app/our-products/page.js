'use client'

import AskForQuote from '@/components/home/AskForQuote'
import Elevator from '@/components/ourProducts/Elevator'
import Escalator from '@/components/ourProducts/Escalator'
import Generator from '@/components/ourProducts/Generator'
import OurProducts from '@/components/ourProducts/OurProducts'
import OurProductsBanner from '@/components/ourProducts/OurProductsBanner'
import ProductCategories from '@/components/ourProducts/ProductCategories'
import Solar from '@/components/ourProducts/Solar'
import React, { useState } from 'react'

const OurProductsPage = () => {
  const [id, setId] = useState(null)
  return (
    <>
      <OurProductsBanner />
      {/* <OurProducts /> */}
      <ProductCategories setId={setId} id={id} />
      {id == 1 ? (
        <Elevator />
      ) : id == 4 ? (
        <Solar />
      ) : id == 3 ? (
        <Generator />
      ) : id == 2 ? (
        <Escalator />
      ) : (
        ''
      )}
      <AskForQuote />
    </>
  )
}

export default OurProductsPage
