import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import AboutSection from '../../components/heroSection/AboutSection'


function Home() {
  return (
    <Layout>
      <HeroSection head='Be it hair, nails or skin - we have you covered' para='CELEBRATE YOUR LUXE LIFE'/>
      <AboutSection />
      <ProductCard />
      <Track />
    </Layout>
  )
}

export default Home