import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";


const Serviccard = ({deta}) => {
  return (
    <div className='w-full h-auto bg-oasim  p-3 mt-5  shadow-inner shadow-zinc-700 pb-5 rounded-tr-[70px] rounded-bl-[70px] hover:rounded-bl-[0px] hover:rounded-tr-[0px] hover:rounded-tl-[70px] hover:rounded-br-[70px] transition-all hover:bg-zinc-800'>
        <div className='w-7/12 h-8 md:h-12 flex justify-between items-center  m-auto'>
        <div className='w-4/12 h-8 md:h-12 rounded-full '> <img className='h-full w-auto' src={deta.icon1} alt=''/>  </div>
        <div className='w-3/12 h-8 md:h-10  flex items-center text-4xl justify-center'> <FaLongArrowAltRight /> </div>
        <div className='w-4/12 mh-12 rounded-full '> <img className='h-full w-auto' src={deta.icon2} alt=''/> </div>
       
             </div>


             <p className='text-center text-xl md:text-2xl mt-2'> {deta.title} </p>
             <p className='text-justify text-sm md:text-base mt-1 mb-8 h-20  '>{deta.dic} </p>
<Link className='text-center py-2 px-4 bg-zinc-800 hover:bg-oasim  shadow-inner shadow-zinc-700   w-6/12 ml-[30%]'> Read More</Link>
      
    </div>
  )
}

export default Serviccard
