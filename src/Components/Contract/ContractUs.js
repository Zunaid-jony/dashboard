import React from 'react'
import AllProduct from '../AllProduct/AllProduct'
import Footer from '../Header/Footer/Footer'
import Navigation from '../Header/Footer/Navigation'
import HomeSlider from '../Home/HomeSlider'
import Bannar from './Bannar'

const ContractUs = () => {
  return (
    <div>
        <Navigation></Navigation>
        <br />
        <br />
        <br />
        <Bannar></Bannar>
        <AllProduct></AllProduct>
        
        {/* <HomeSlider></HomeSlider> */}
        <Footer></Footer>
        
    </div>
  )
}

export default ContractUs