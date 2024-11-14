import React from 'react'
import Myphoto1 from '../img/myphoto.png'

const About = () => {
  return (
    <div className='w-full'>
        <div className='w-90 m-auto h-auto md:h-[500px] flex flex-col-reverse md:flex-row justify-center'>
            <div className='w-full md:w-7/12 mt-[50px]'> 
            <p className=' text-2xl md:text-5xl mb-5'> Looking for a unique and captivating design?</p>
            <p className=' text-xl md:text-3xl mb-5'>  I'm here to bring your vision to life!</p>
            <p className='text-xsm md:text-base text-justify mt-2'> If you're seeking a design that truly stands out and grabs attention, I'm here to transform your vision into reality with creativity and meticulous attention to detail. Whether you need a striking website, a captivating brand identity, or any other creative solution, I offer fully customized designs that not only look visually stunning but are crafted to align perfectly with your unique goals and target audience. From concept to completion, my approach ensures that each design element is thoughtfully created to leave a lasting impression and help you achieve success in your projects.</p>
<ul className='mt-5 text-xsm md:text-base'>
    <li>Unique and captivating design</li>
    <li>Tailored to your vision and goals</li>
    <li>Creative solutions with precision</li>
</ul>


            </div>
            <div className='w-full md:w-5/12 h-full relative overflow-hidden'> 
            <div className='w-90 m-auto h-[200px] md:h-[400px] rounded-t-full bg-oasim mt-[100px] relative overflow-hidden  shadow-3xl shadow-zinc-700 '> 
                
            </div>
            <img className='w-full h-auto absolute  inset-0 bottom-0 left-0 right-0 ' src={Myphoto1} alt='' />

            </div>

        </div>
      
    </div>
  )
}

export default About
