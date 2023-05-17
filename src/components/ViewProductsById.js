import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ViewProductsById = () => {
    const[id,setId]=useState(1)
  return (
    <div>
        <div className='m-2'>
            
            <img/>
            <h1>Product Name</h1>
            <h1>Descirption</h1>
            <h1>Price</h1>
            <div className=''>
         <Link to={'/editproduct/'+id}><button className='bg-green-900 rounded-md  text-white'><span className='m-2'>Edit Product</span></button></Link>   
            <button className='bg-red-700 ml-2 rounded-md text-white'><span className='m-2'>Delete Product</span></button>
            </div>
            
        </div>
    </div>
  )
}

export default ViewProductsById