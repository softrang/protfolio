import React from 'react'
import Header from './Header'

import Fotter from './Fotter.js'
import Page1 from './page/Page1.js'
import Service from './page/Service.js'
import About from './page/About.js'
import Skills from './page/Skills.js'
import Brands from './page/Brands.js'
import Workpor from './page/Workpor.js'
import Contact from './page/Contact.js'
import ShowCase from './page/ShowCase.js'

const App = () => {
  return (
<>  


<Header/>
<Page1/>
<ShowCase/>
<Service/>
<About/>
<Skills/>
<Brands/>
<Workpor/>
<Contact/>
 
    <Fotter/>


   

    </>
  )
}

export default App
