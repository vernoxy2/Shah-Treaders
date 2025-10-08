import React from 'react'
import Head from '../../Components/Header'
import Together from '../../Components/Together'
import Footer from '../../Components/Footer'
import KnowUs from './Sections/KnowUs'
import TailoredSolutions from './Sections/TailoredSolutions'
import ProvenChoice from './Sections/ProvenChoice'
import ClientsFeedback from './Sections/ClientsFeedback'
import IndustrialStrength from './Sections/IndustrialStrength'

const Home = () => {
  return (
    <div className=''>
      I am home page
      <Head/>
      <KnowUs/>
      <IndustrialStrength/>
      <TailoredSolutions/>
      <ProvenChoice/>
      <ClientsFeedback/>
      <Together/>
      <Footer/>
    </div>
  )
}

export default Home
