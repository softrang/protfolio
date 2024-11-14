import React from 'react'
import Brandcrad from '../component/Brandcrad'
import { useDeta } from '../Context/ShareData'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'


const Brands = () => {
  const {brand} = useDeta()
  return (
    <div className='w-full py-5 '>
        <div className='w-90 m-auto '>
            <p className='text-center text-2xl md:text-4xl py-5'> Brands I've Designed For</p>
            <div className='w-full flex gap-5'> 
            <Swiper
 modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      loop = {true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints= {{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        426: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}

    >
      {brand.map((items, index) => (
  <SwiperSlide key={index}>

<Brandcrad deta ={items}/>
   

  </SwiperSlide>
))}
      
     
    </Swiper>

 





               
                

            </div>

        </div>
      
    </div>
  )
}

export default Brands
