import React from 'react'
import hero from '../../assets/home/hero.png'
import heroH5 from '../../assets/home/small.png'
import { useNavigate } from 'react-router-dom';

 function HeroSection({head, para}) {
  const navigate = useNavigate();
  return (
    <div className='hero'>
        <img className='height-adjust animate__animated animate__fadeIn desk' src={hero} alt="" />
        <img className='height-adjust animate__animated animate__fadeIn mob' src={heroH5} alt="" />
        <div className="hero-content">
            <h1 className='bilbo-font animate__animated animate__slideInUp'>{head}</h1>
            {/* <h2>CELEBRATING 25 YEARS IN UAE</h2> */}
            <h2 className='animate__animated animate__slideInUp'>{para}</h2>
            <button onClick={()=>(navigate('/allproducts'))} className='animate__animated animate__slideInUp'>Get your bag Now</button>
        </div>
    </div>
  )
}

export default HeroSection