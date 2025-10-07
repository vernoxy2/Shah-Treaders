import React from 'react'
import Footer from '../../Components/Footer'
import Together from '../../Components/Together'
import Certifications from './Sections/Certifications'
import Guiding_Values from './Sections/Guiding_Values'
import Delivering from './Sections/Delivering'
import Core_Values from './Sections/Core_Values'

const About = () => {
  return (
    <div>
      <p className='text-primary text-center'>About Us Page</p>
      <Delivering/>
      <Core_Values/>
      <Guiding_Values/>
      <Certifications/>
      <Together/>
      <Footer/>
    </div>
  )
}

export default About
