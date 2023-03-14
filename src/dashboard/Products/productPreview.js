import React from 'react'
import { Link } from 'react-router-dom'


const productPreview = ({value, value1}) => {
  console.log("value",value)
  return (
    <div>
    ProductName:{value}
    ProductName:{value1}
       
    </div>
  )
}

export default productPreview