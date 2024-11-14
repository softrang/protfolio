import React from 'react'
import Workcard from '../component/Workcard'
import { useDeta } from '../Context/ShareData'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'


const Workpor = () => {
  const {work} = useDeta()
  return (
    <div className='w-full  py-5'>
        <div className='w-90 m-auto'> 
            <p className='text-center text-2xl md:text-4xl py-5'> How I Bring Ideas to Life </p>
            <div className='w-full flex gap-5'> 
               
            <Swiper
 modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={4}
      loop = {true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints= {{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        426: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }}

    >
      {work.map((items, index) => (
  <SwiperSlide key={index}>

<Workcard deta={items}/>
    


  </SwiperSlide>
))}
      
     
    </Swiper>    
               
               
              
               

            </div>

        </div>
      
    </div>
  )
}

export default Workpor
