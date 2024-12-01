import React, { createContext, useContext } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { FaCalendarAlt } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';

import brand1 from '../img/brand1.png'
import brand2 from '../img/brand2.png'
import brand3 from '../img/brand3.png'
import brand4 from '../img/brand4.png'
import brand5 from '../img/brand5.png'
import brand6 from '../img/brand6.png'
import brand7 from '../img/brand7.jpg'

import work1 from '../img/work1.webp'
import work2 from '../img/work2.webp'
import work3 from '../img/work3.webp'
import work4 from '../img/work4.webp'
import work5 from '../img/work5.png'

import skill1 from '../img/skill1.png'
import skill2 from '../img/skill2.png'
import skill3 from '../img/skill3.png'
import skill4 from '../img/skill4.png'
import skill5 from '../img/skill5.png'
import skill6 from '../img/skill6.png'

import service1 from '../img/coustom.png'
import service2 from '../img/service2.png'
import service3 from '../img/service3.webp'

import servicec from '../img/servicec.png'
import service4 from '../img/service4.png'
import service5 from '../img/service5.png'

import dagdoom from '../img/Show1.PNG'
import zilly from '../img/Show2.PNG'
import catagori from '../img/show3.png'



const ShareDeta = createContext();

export const useDeta = () => useContext(ShareDeta);

export const DetaProvider = ({ children }) => {

const sucsess =[ 
    {
        icon:<AiOutlineLike /> , title:" 5+", dic:"Satisfide Customar"

    },
    {
        icon:<FaAward /> , title:" 3+", dic:"Waird Win"

    },
    {
        icon:<FaChartLine /> , title:" 8+", dic:"Sucsessful Project"

    },
    {
        icon:<FaCalendarAlt/> , title:" 1.5+", dic:"Year's of Experienc"

    },


]

const service =[
    {
        icon1 :service1, icon2:servicec, title:"Custom Designe", dic:"Custom design creates unique, tailored solutions for branding, products, or websites, ensuring personalized user experiences"

    },
    {
        icon1 :service2,  icon2:servicec, title:"Ai to HTML ", dic:"AI to HTML tools convert artificial intelligence designs into clean, responsive HTML code for web development projects"

    },
    {
        icon1 :service5, icon2:servicec, title:"PSD to HTML", dic:"PSD to HTML conversion transforms Photoshop designs into responsive, clean HTML code for websites and applications"

    },
    {
        icon1 :service3, icon2:servicec, title:"Figma to HTML", dic:"Figma to HTML conversion translates Figma designs into responsive, clean HTML and CSS code for web projects"

    },
    {
        icon1 :servicec, icon2:service4, title:"Development", dic:"Web development involves creating and maintaining websites and web applications"

    },
]

const skill =[
    {
        icon:skill1, title:"Adove AI", dic:"Adobe AI provides intelligent tools for creative design and automation", 

    }, 
    {
        icon:skill2, title:"Adove Photoshop", dic:"Adobe Photoshop is a powerful image editing and graphic design software", 

    }, 
    {
        icon:skill3, title:"HTML5", dic:"HTML5 is the latest version for structuring modern web content" , 

    }, 
    {
        icon:skill4, title:"CSS3", dic:"CSS3 is used for styling websites with advanced visual effects" , 

    }, 
    {
        icon:skill5, title:"Bootstrap 5", dic:"Bootstrap 5 is a responsive front-end framework for building websites faster" ,

    }, 
    {
        icon: skill6, title:"Tailwind CSS", dic:"Tailwind CSS is a utility-first framework for creating custom designs efficiently",

    }, 
]


const brand= [
    {
        image:brand1

    }, 
    {
        image:brand2

    }, 
    {
        image:brand3

    }, 
    {
        image:brand4

    }, 
    {
        image:brand5

    }, 
    {
        image:brand6

    }, 
    {
        image:brand7

    }, 
    
]

const work=[
    {
       icon:work1,  step:"Step1", dic:"", title:"Visit Project"

    },
    {
       icon:work2, step:"Step2", dic:"", title:"Planing And Desinge"

    },
    {
       icon:work3,  step:"Step3", dic:"", title:"Project skach"

    },
    {
       icon:work4, step:"Step4", dic:"", title:"start Working"

    },
    {
       icon:work5,  step:"Step5", dic:"", title:"Project Handover"

    },
 
]

const showcase =[
    {
        image:dagdoom, title:"DagdoomClone", Lang:"React.js", dic:"Use Gsap Libray for animation, Context api, useState useRef Tawlind CSS for UI/UX"
, link:"https://dagdoom.netlify.app"
    },
    {
        image:zilly, title:"ZillyClone", Lang:"React.js", dic:"Context api, useState useRef Tawlind CSS for UI/UX"
, link:"https://zillyclone.netlify.app"
    },
    {
        image:catagori, title:"Product Mangment", Lang:"React.js", dic:"Use Reducx and Redux-toolkit, useState useRef Tawlind CSS for UI/UX"
, link:"https://productmd.netlify.app"
    },
    {
        image:catagori, title:"", Lang:"React.js", dic:"Use Reducx and Redux-toolkit, Context api, useState useRef Tawlind CSS for UI/UX"
, link:"https://productmd.netlify.app"
    },
]

return (
    <ShareDeta.Provider value={{sucsess, service, skill,  brand, work, showcase}}>
      {children}
    </ShareDeta.Provider>
  );

};