import React from 'react'
import Myphoto2 from '../img/myphoto.png'

const Contact = () => {
  return (
    <div className='w-full py-5'>
        <div className='w-90 m-auto'>
            <p className='text-center text-2xl md:text-4xl py-5'> Let’s create something great together! </p>
            <p className='text-center text-base md:text-xl'> Let's combine our skills and creativity to bring your vision to life and achieve outstanding results! </p>
            <div className='w-full flex h-auto md:h-[500px] items-center  mt-10 flex-col md:flex-row'> 
                <div className=' w-full md:w-7/12 '> 
                <form className='w-full md:w-8/12 m-auto h-full  p-5 '>
                    <label className="text-base md:text-xl"> Name  </label> <br/>
                    <input className='w-full h-10 bg-oasim shadow-inner shadow-zinc-700  mb-5 outline-0 px-4' type='text ' placeholder='Enter Your Name'/> 
                    
                    <label className="text-base md:text-xl"> E-mail  </label> <br/>
                    <input className='w-full h-10 bg-oasim shadow-inner shadow-zinc-700  mb-5 outline-0 px-4' type='email ' placeholder='Enter Your email'/> 
                    <label className="text-base md:text-xl"> Phone </label> <br/>
                    <input className='w-full h-10 bg-oasim shadow-inner shadow-zinc-700  mb-5 outline-0 px-4' type='numbar ' placeholder='Enter Your phone'/> 
                    <label className="text-base md:text-xl  "> What Services Are You Looking For </label> 
                    <textarea className='w-full h-28 bg-zinc-900 shadow-inner shadow-zinc-700  mt-3 mb-5 outline-0 px-4 resize-none ' type='text '  placeholder='Enter Your meseage'/> 
                    <button className='w-3/12 text-center py-2 bg-oasim shadow-inner shadow-zinc-700  '> Send</button>


                </form>
                

                </div>
                <div className='w-full md:w-5/12 h-full  relative overflow-hidden'> 
                <div className='w-90 h-[250px]  m-auto md:h-[400px] bg-oasim shadow-inner shadow-zinc-700 rounded-t-full mt-[100px]'> 

                </div>
                <img className='w-full  h-auto absolute top-0' src={Myphoto2}  alt=''/>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Contact
