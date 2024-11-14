import React from 'react'
import Showwork from '../component/Showwork'
import { useDeta } from '../Context/ShareData';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'

const ShowCase = () => {
  const { showcase } = useDeta();

  return (
    <div className='w-full py-5 '>
        <h1 className='text-4xl text-center py-5'> My Work Show Case</h1>
        <h1 className='text-2xl text-center pb-5'> My Work Showcase: Highlighting My Expertise</h1>
    <div className='w-90 flex gap-5 flex-wrap m-auto justify-around'>
    <Swiper
 modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      loop = {true}
     
      breakpoints= {{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        426: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}

    >
      {showcase.map((item, index) => (
  <SwiperSlide key={index}>

<Showwork items = {item}/>
   

  </SwiperSlide>
))}
      
     
    </Swiper>

    </div>
    </div>
  )
}

export default ShowCase
