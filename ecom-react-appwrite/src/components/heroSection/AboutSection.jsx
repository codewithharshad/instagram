import React, {useEffect, useRef} from 'react'
import underline from '../../assets/home/underline.png'
import arrow from '../../assets/home/up-arrow.png'
import heroVideo from '../../assets/home/hero-video.mp4'
import { useNavigate } from 'react-router-dom';

 function AboutSection() {
  const navigate = useNavigate();
  const whyContent =[
    {
      point:'Our beaded bags are meticulously handcrafted with attention to detail.',
    },
    {
      point:'Our products are made with integrity and care',
    },
    {
      point:'We strive to provide excellent customer service and satisfaction with every purchase.',
    },
    {
      point:'Personalize your bag to suit your style with our customization options.',
    },
    {
      point:'Experience the luxury of handmade beaded bags at an affordable price point.',
    }
  ];
  const videoRef = useRef(null);

 useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false;
      videoRef.current.autoplay = true;
      videoRef.current.muted = true; // Mute the video
    }
  }, [videoRef.current]); // Include videoRef.current as a dependency
  

  const titleRef = useRef();
  const subtitleRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const titleTop = titleRef.current.getBoundingClientRect().top;
      const subtitleTop = subtitleRef.current.getBoundingClientRect().top;
      const imageTop = imageRef.current.getBoundingClientRect().top;

      if (titleTop < window.innerHeight) {
        titleRef.current.classList.add('animate__animated', 'animate__slideInUp');
      }

      if (subtitleTop < window.innerHeight) {
        subtitleRef.current.classList.add('animate__animated', 'animate__slideInUp');
      }

      if (imageTop < window.innerHeight) {
        imageRef.current.classList.add('animate__animated', 'animate__slideInUp');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
  <>
    <div className='about'>
        <div className="about-content">
            <h3 className='mr-font text-primary animate__animated animate__slideInUp'  ref={titleRef}>Welcome To</h3>
            <h4 className='rale-font animate__animated animate__slideInUp'  ref={subtitleRef}>Smaira Luxe</h4>
            <img src={underline}  ref={imageRef} alt="" />
        </div>
        <div className="about-para">
            <h4 className='rale-font'>Welcome to Smaira Luxe: Handmade Luxury Crafted with Love.</h4>
            <p className='rale-font'>Welcome to our handmade beaded bag collection! Elevate your style with our unique and meticulously crafted bags. Each piece is expertly designed and handcrafted with care, ensuring quality and attention to detail in every stitch. Explore our range of vibrant colors, intricate patterns, and versatile styles that add a touch of elegance to any outfit. Whether you're looking for a statement piece or a subtle accessory, our beaded bags are the perfect blend of fashion and craftsmanship. Shop now and add a touch of artisanal charm to your wardrobe!</p>
            <img src={underline} alt="" />
        </div>
    </div>
    <div className="why container">
      <div className="left">
        <div className="heading">
            <h3 className="bilbo-font text-primary">Smaira Luxe</h3>
            <h4 className="rale-font">Why Choose Us</h4>
            <img src={underline} alt="" />
        </div>
 <div className="para">
        {whyContent.map((item, index) => (
          <div className="point" key={index}>
            <div className="bullet">
              <div className="inner"></div>
            </div>
            <p className="rale-font">{item.point}</p>
          </div>
        ))}
      </div>
        <div className="cta-btn rale-font" onClick={()=>(navigate('/allproducts'))}>
          Shop now 
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="right">
      <video ref={videoRef} width="320" height="240" controls={false} autoPlay mute loop>
      <source src={heroVideo} type="video/mp4" />
       Your browser does not support the video tag.
    </video>
         
      </div>
    </div>
  </>
  )
}

export default AboutSection