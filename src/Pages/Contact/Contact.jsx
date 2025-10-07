import React from 'react'
import Footer from '../../Components/Footer'
import Together from '../../Components/Together'
import FormMap from './Sections/FormMap'
import ReachOut from './Sections/ReachOut'

const Contact = () => {
  return (
    <div>
      <p className='text-primary text-center'>Cotact Us Page</p>
      <ReachOut/>
      <FormMap/>
      <Footer/>
    </div>
  )
}

export default Contact
