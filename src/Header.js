import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/logo.png'


const Header = () => {
  return (
    <div className='w-full  bg-oasim '> 
    <div className=' w-90 flex justify-between py-3 m-auto '>  
    <div className='w-3/12 '> 
    <img className='w-2/3' src={Logo} alt='' />

    </div>
    <div className='w-9/12 flex gap-2  text-white justify-end uppercase'>
    {["home", "Services",  "Work", "Blog", "Hiring Me"].map((item, index) => (
      <Link to={["/", "/service", "/work", "/blog" ,"hiring"  ][index]} key={index} className={`text-lg p-2 px-3  ${index===4 && "ml-32 bg-violet-500 text-white"} `}>{item}</Link>
    ))}
  </div>
  </div>
  </div>

  )
}

export default Header
