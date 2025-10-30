import React from 'react'
import Together from '../../Components/Together'
import FormMap from './Sections/FormMap'
import ReachOut from './Sections/ReachOut'
import SubHeader from '../../Components/SubHeader'
import Head from '../../assets/Contact/HeadImg.webp'

const Contact = () => {
  return (
    <div>
      {/* <p className='text-primary text-center'>Cotact Us Page</p>   */}
      <SubHeader Head={Head} text={"Contact Us"}/>
      <ReachOut/>
      <FormMap/>
      <Together/>
    </div>
  )
}

export default Contact
