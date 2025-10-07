import React from 'react'
import Head from '../../Components/Header'
import Together from '../../Components/Together'
import Footer from '../../Components/Footer'
import KnowUs from './Sections/KnowUs'
import Proven_Choice from './Sections/Proven_Choice'
import TailoredSolutions from './Sections/TailoredSolutions'

const Home = () => {
  return (
    <div className=''>
      I am home page
      <Head/>
      <KnowUs/>
      <Proven_Choice/>
      <TailoredSolutions/>
      <Together/>
      <Footer/>
    </div>
  )
}

export default Home
