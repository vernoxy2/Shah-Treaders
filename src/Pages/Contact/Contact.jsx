import React from 'react'
import FormMap from './Sections/FormMap'
import ReachOut from './Sections/ReachOut'
import SubHeader from '../../Components/SubHeader'
import Head from '../../assets/Contact/HeadImg.webp'

const Contact = () => {
  return (
    <div>
      <SubHeader Head={Head} text={"Contact Us"}/>
      <ReachOut/>
      <FormMap/>
    </div>
  )
}

export default Contact
