import React from 'react'
import Myphoto from '../img/myphoto.png'
import { useDeta } from '../Context/ShareData'

const Page1 = () => {
const {sucsess} = useDeta()

  return (
    <div className='w-full '>
        <div className='w-90 m-auto h-auto md:h-[500px] flex flex-col md:flex-row items-center '>
            <div className='w-full md:w-4/12'>
            <p className='text-2xl  md:text-3xl mb-5'> Welcome to  My Portfolio! </p>
            <p className=' text-5xl md:text-5xl mb-7'> I'am  <br/> MD Oasim Mia  </p>
            <p className=' text-5xl md:text-4xl mb-7 upercase'> A Front-end Developer  </p>
            <p className='text-base md:text-xl mb-5'> Explore my work, expertise, and projects. Discover how I can help bring your vision to life. </p>
            

            </div>
            <div className='w-full md:w-5/12 h-auto md:h-full '>
            <div className='w-full md:w-90 m-auto h-[400px] md:h-[500px] shadow-2xl shadow-zinc-700 rounded-b-full bg-oasim overflow-hidden border-b-2 border-l-2 border-r-2 border-zinc-300 '>
              <img className='w-full h-auto ' src={Myphoto} alt='' />

            </div>

            </div>
            <div className='w-full md:w-3/12 '>
            {sucsess.map((items, index)=>(
            <div key={index} className='w-full flex justify-between items-center mb-2'>
              <div className='w-2/12 h-12 flex items-center justify-center text-3xl bg-oasim border-2 border-white rounded-full'>{items.icon}</div>
              <div className='w-9/12'>
              <p className='text-3xl'>{items.title}</p>
              <p className='text-lg'>{items.dic}</p>
              </div>

            </div>
 ))}

         



            </div>

        </div>

      
    </div>
  )
}

export default Page1
