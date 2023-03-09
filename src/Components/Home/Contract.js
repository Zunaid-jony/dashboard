import React from 'react'
import Footer from '../Header/Footer/Footer'
import Navigation from '../Header/Footer/Navigation'
import Map from '../ProductDetails/Map'
import Contact from './Contact'

const Contract = () => {
  return (
    <div>


<Navigation></Navigation>
        <br />
        <br />


        <div>
      <div className=' ml-auto mr-auto section section-work-data bg-[url("https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_960_720.jpg")]'>
        <div className="ml-auto   text-white    pt-20 pb-20 ">

          <p className="">ALL Contract</p>
          <p className="text-xl"> <span className="mr-1">Home </span>  > <span className="ml-1">Contract</span> </p>

          
        </div>
      </div>
    </div>
        <div className='container ml-auto mr-auto'>
        <Map></Map>

        </div>
        <Contact></Contact>

        <Footer></Footer>
      
    </div>
  )
}

export default Contract