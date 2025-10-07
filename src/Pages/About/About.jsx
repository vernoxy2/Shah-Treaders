import React from 'react'
import Footer from '../../Components/Footer'
import Together from '../../Components/Together'
import Certifications from './Sections/Certifications'
import Guiding_Values from './Sections/Guiding_Values'
import Delivering from './Sections/Delivering'

const About = () => {
  return (
    <div>
      <p className='text-primary text-center'>About Us Page</p>
      <Delivering/>
      <Guiding_Values/>
      <Certifications/>
      <Together/>
      <Footer/>
    </div>
  )
}

export default About
