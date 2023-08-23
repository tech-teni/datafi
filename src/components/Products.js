import React from 'react'
import { useState, useEffect } from 'react';
import productList from '../API'
import { useNavigate } from 'react-router-dom';

const Products = ({}) => {

  const navigate = useNavigate()
    const [products, setProducts]=useState([])

    useEffect(()=>{
        setProducts(productList)
      
      }, [])


  return (
    <section className='product-section'>
          {products.map((each)=>{

          return <li className='product' key={each.id} onClick={(e)=>{
            navigate(`/view-product/:${each.id}`)

          }}>
          <div><h5>{each.name}</h5>
            <p>Type: {each.type}</p>
            <p>Description: {each.description}</p></div>
          <div><button className={each.status}>{each.status}</button>
          <p>{each.date_created}</p></div>
      
          </li>
          })}

            
          
        </section>
  )
}

export default Products
