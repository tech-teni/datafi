import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products';
 import { useParams } from 'react-router-dom';




const ViewProduct = () => {
   
  return (
    <div>
     <Navbar/>
     <Products/>   
    </div>
  )
}

export default ViewProduct
