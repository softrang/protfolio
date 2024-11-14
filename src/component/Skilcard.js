import React from 'react'

const Skilcard = ({deta1}) => {
  return (
    <div className='w-full h-auto bg-oasim p-3 shadow-inner shadow-zinc-700  hover:bg-zinc-800'>
        <div className='w-2/12 h-12 m-auto   rounded-lg  '>
        <img className='h-auto w-full' src= {deta1.icon} alt=''/> 

        </div>
        <p className='text-center text-3xl'> {deta1.title} </p>
        <p className='text-center text-lg mb-2 h-20'>{deta1.dic} </p>

        <div className='w-full h-3 bg-violet-950 rounded-full'> 
        <div className={`w-[85%] h-3 bg-violet-800 rounded-full`}> 
        </div>
       
          
          
        </div>
        
      
    </div>
  )
}

export default Skilcard
