import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products';
 import { useParams } from 'react-router-dom';
import productList from '../API';



const ViewProduct = () => {

    const[data, setData]=useState({})

    const paramsId =useParams()
    console.log(paramsId.id)
   

    useEffect(()=>{
       let result= productList.filter((each)=>{

            return each.id === Number(paramsId.id)
        })

        setData(result[0])

    }, [])
  return (
    <div>
     <Navbar/>
     <div className='product view-product' key={data.id}>
          <div><h5>{data.name}</h5>
            <p>Type: {data.type}</p>
            <p>Description: {data.description}</p></div>
          <div><button className={data.status}>{data.status}</button>
          <p>{data.date_created}</p></div>
      
          </div> 
    </div>
  )
}

export default ViewProduct
