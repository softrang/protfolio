import React from 'react'

const Workcard = ({deta}) => {
  return (
    <div className=' w-full  h-auto  '>
        <div className=' w-[70px] h-[70px] bg-oasim   shadow-inner shadow-zinc-700  rotate-45 origin-center  m-auto rounded-tl-full'>
        <p className='text-center text-lg rotate-[-45deg] w-full h-full  origin-center pt-5  '> {deta.step} </p>

        </div>
        <div className='w-full h-full  bg-oasim   shadow-inner shadow-zinc-700  rounded-tl-full mt-3 p-2   m-auto '> 
           
                <div className='w-2/12 h-10  bg-oasim m-auto p-1 '> 
                <img src={deta.icon} alt='' />

                </div>

                <p className='text-center msm:text-base text-xl mt-5'>{deta.title}</p>

            

        </div>
      
    </div>
  )
}

export default Workcard
