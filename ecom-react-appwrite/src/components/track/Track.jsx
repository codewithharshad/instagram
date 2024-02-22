import React, { useContext, useRef, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import './Track.scss'; 
import confirmIcon from '../../assets/home/confirmation.png';
import deliveredIcon from '../../assets/home/delivered.png';
import deliveryIcon from '../../assets/home/delivery.png';
import checkoutIcon from '../../assets/home/checkout.png';
import underline from '../../assets/home/underline.png';
import { useNavigate } from 'react-router-dom';


function Track() {
    const context = useContext(myContext);
    const navigate = useNavigate();

    const { mode } = context;
    const cardContent=[
        {
            icon: checkoutIcon,
            heading: 'Order from our website',
            desc: 'Order with your full address and complete the payment.'
        },
        {
            icon: confirmIcon,
            heading: 'Your Confirmation',
            desc: 'Once we have shipped your order you will receive a confirmation email. '
        },
        {
            icon: deliveryIcon,
            heading: 'Your Order is on Its Way',
            desc: 'You can login to our website to track the Order'
        },
        {
            icon: deliveredIcon,
            heading: 'Carriers and Notifications',
            desc: 'You will get your orders within 7-10 business days.'
        },
    ]
    const titleRef = useRef();
  const subtitleRef = useRef();
  const imageRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const titleTop = titleRef.current.getBoundingClientRect().top;
      const subtitleTop = subtitleRef.current.getBoundingClientRect().top;
      const imageTop = imageRef.current.getBoundingClientRect().top;
      const ctaTop = ctaRef.current.getBoundingClientRect().top;

      if (titleTop < window.innerHeight) {
        titleRef.current.classList.add('animate__animated', 'animate__slideInUp');
      }

      if (subtitleTop < window.innerHeight) {
        subtitleRef.current.classList.add('animate__animated', 'animate__slideInUp');
      }

      if (imageTop < window.innerHeight) {
        imageRef.current.classList.add('animate__animated', 'animate__slideInUp');
      }
      if (ctaTop < window.innerHeight) {
        ctaRef.current.classList.add('animate__animated', 'animate__slideInUp');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return (
        <div>
            <section className='track'>
                <div className="track-content">
                    <h3 className='bilbo-font text-primary' ref={titleRef}>How To</h3>
                    <h4 className='rale-font' ref={subtitleRef}>Track your Order?</h4>
                    <img src={underline} alt=""  ref={imageRef}/>
                </div>
                <div className="container mx-auto px-5 md:py-5 ">
                    <div className="flex flex-wrap -m-4 text-center">
                        {cardContent.map((item,index)=>(
                                          <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                          <div className="hover:shadow-sm hover:shadow-gray-200 bg-gray-custom shadow-[inset_0_0_2px_rgba(0,0,0,0.3)] px-4 py-6 h-56 track-card-main">
                                              
                                            <img src={item.icon} alt="" />
                                              <h2 className="title-font font-medium text-lg text-gray-900 rale-font" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.heading}</h2>
                                              <p className="leading-relaxed rale-font">{item.desc}
                                              </p>
                                          </div>
                                      </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="cta-section" ref={ctaRef} >
                    <h2 className='rale-font'>DON’T WASTE TIME! ORDER YOUR BAG NOW</h2>
                    <p className='rale-font'>Everything you need to feel Lux...</p>
                    <div className="btn-content">
                        <button className='rale-font' onClick={()=>(navigate('/contact'))}>Contact us</button>
                        <button className='rale-font' onClick={()=>(navigate('/allproducts'))}>Order Now</button>
                    </div>
            </div>
        </div>
    )
}

export default Track