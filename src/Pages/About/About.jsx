import React from 'react'
import Together from '../../Components/Together'
import Certifications from './Sections/Certifications'
import Guiding_Values from './Sections/Guiding_Values'
import Delivering from './Sections/Delivering'
import Core_Values from './Sections/Core_Values'
import SubHeader from '../../Components/SubHeader'
import Head from '../../assets/About/HeadImg.webp'

const About = () => {
  return (
    <div>
      <SubHeader Head={Head} text={"About Us"}/>
      <Delivering/>
      <Core_Values/>
      <Guiding_Values/>
      <Certifications/>
      {/* <Together/> */}
    </div>
  )
}

export default About
