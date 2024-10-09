'use client'

import React from 'react';
import Elevator from '@/components/ourProducts/Elevator';
import Solar from '@/components/ourProducts/Solar';
import Generator from '@/components/ourProducts/Generator';
import Escalator from '@/components/ourProducts/Escalator';


const SingleCategory = ({ params }) => {
    const { id } = params;
  return (
    <>
      {
        id == 1 ? <Elevator /> : id == 4 ? <Solar /> : id == 3 ? <Generator />: <Escalator />
    }
    </>
  )
}

export default SingleCategory