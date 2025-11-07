import React from 'react'
import FormMap from './Sections/FormMap'
import ReachOut from './Sections/ReachOut'
import SubHeader from '../../Components/SubHeader'
import Head from '../../assets/Contact/HeadImg.webp'
import Footer from '../../Components/Footer'

const Contact = () => {
  return (
    <div>
      <SubHeader Head={Head} text={"Contact Us"} scrollTarget={"#ReachOut"}/>
      < ReachOut/>
      <FormMap/>
      <Footer/>
    </div>
  )
}

export default Contact
