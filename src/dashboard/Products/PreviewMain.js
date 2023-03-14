import React from 'react'
import Footer from '../../Components/Header/Footer/Footer'
import Map from '../../Components/ProductDetails/Map'
import PreviewHeader from './PreviewHeader'
import PreviwImage from './PreviwImage'

const PreviewMain = ({value,value1,pimg}) => {
  return (
    <div>


     {value}

     <div>
   
      <br />
      <br />
      <br />
      <PreviwImage  value={value} value1={value1} pimg={pimg}></PreviwImage>
     
     
      <PreviewHeader></PreviewHeader>
      <Map></Map>
      <div className="grid grid-cols-6 container ml-auto mr-auto mt-10">
        <div className="col-span-2">
          <div className=" ml-auto mr-auto">
            <div className="flex min-h-full flex-col  sm:px-2 lg:px-3 md:ml-6 pt-1  mt-0 ">
              <div className="sm:sticky sm:top-8"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
   

     

    </div>
  )
}

export default PreviewMain