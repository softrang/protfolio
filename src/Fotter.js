import React from 'react'
import { Link } from 'react-router-dom'

const Fotter = () => {
  return (
    <>  
    <div className='w-full py-5 bg-oasim text-white shadow-inner shadow-zinc-700'>
        <div className='w-90 flex gap-2 m-auto flex-col md:flex-row'> 
            <div className='w-full md:w-1/4'> 
            <div className='text-xl w-full md:w-90 uppercase py-3 border-b border-zinc-50 mb-5 text-oasim3'> 
                <h1>Corporate Office</h1>
            </div>
            <h1> Dhaka Bangladesh</h1>
            <p className='mb-10'> info@softrang.com</p>

            <Link className='px-5 py-2 border-2 border-oasim1 hover:bg-oasim1 hover:text-white '> Hiiring me</Link>
            </div>
            <div className='w-full md:w-1/4'> 
            <div className='text-xl w-full md:w-90 uppercase py-3 border-b border-zinc-50 mb-5 text-oasim3'> 
                <h1>Quick Link </h1>
            </div>
                <ul className='text-lg'>
        <li>About </li>
        <li>Contact </li>
      
        <li>Blog</li>
        <li>FAQ</li>
        </ul>
            </div>
            <div className='w-full md:w-1/4'> 
            <div className='text-xl w-full md:w-90 uppercase py-3 border-b border-zinc-50 mb-5 text-oasim3'> 
                <h1>Web Services</h1>
            </div>


            <ul className='text-lg'>
      <li>Web Design</li>
      <li>Web Development</li>
      <li>Front End Website</li>
    </ul>
            </div>
            <div className='w-full md:w-1/4'> 
            <div className='text-xl w-full md:w-90 uppercase py-3 border-b border-zinc-50 mb-5 text-oasim3'> 
                <h1>Socail Link</h1>
            </div>
            <div className='w-full flex gap-5'> 
                <div className='w-2/12 h-10 rounded-xl bg-violet-300'></div>
                <div className='w-2/12 h-10 rounded-xl bg-violet-300'></div>
                <div className='w-2/12 h-10 rounded-xl bg-violet-300'></div>
                <div className='w-2/12 h-10 rounded-xl bg-violet-300'></div>

            </div>

           


            </div>
            
        </div>
      
    </div>

<div className='w-full py-2 bg-oasim shadow-inner shadow-zinc-700'> 
    <div className='w-90 text-white  text-center text-base  md:text-lg'> 
    Copyrights ©2024 All Rights Reserved <Link to="https://rangcon.com" className='text-rose-600'> Rangcon </Link> 

    </div>

</div>
</>
  )
}

export default Fotter
