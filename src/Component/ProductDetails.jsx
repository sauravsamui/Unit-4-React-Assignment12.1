import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import styles from "./productDetails.module.css"
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
const ProductDetails = () => {
const [pdetails,setPDetails] = useState({})
const {id} = useParams()
const {isAuth} = useContext(AuthContext)
useEffect(() => {
  if(id){
    axios.get(`http://localhost:8080/data/${id}`)
    .then((res)=>(setPDetails(res.data)))
    return () => {
  }
 
  
  }
}, [id])
let handleCart =()=>{
  if(isAuth){
    alert("successfully added!");
  }else{
    alert("Please login First!")
  }
}



  return (
    <div>
      <h1 className={styles.header}>Product Details</h1>

     <div className={styles.outerDiv}>
       <img className={styles.imgg} src={pdetails.image}/>
       <h2>{pdetails.name}</h2>
       <h4>{`₹${pdetails.price}`}</h4>

       <button type="button" class="btn btn-outline-danger  btn-lg" 
       onClick={handleCart}
       >Add To Cart</button>

       </div>
        

      </div>
  )
}

export default ProductDetails