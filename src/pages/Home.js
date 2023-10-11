import React, { useEffect } from 'react'
import { Banner } from '../components/Banner/Banner'
import { InfoCard } from '../components/InfoCard/InfoCard'



export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    <div>
      <Banner/>
      <InfoCard/>
      </div>
  )
}

