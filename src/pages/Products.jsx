import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import styles from "../Component/products.module.css"
const Products = () => {
  const [products,setProducts] = useState([])

  useEffect(() => {
    
    axios.get("http://localhost:8080/data")
    .then((res)=>(setProducts(res.data)))
    return () => {
    
    }
  }, [])
  
  return (
    <div>
      <h1 className={styles.head}>Products</h1>
  <div className={styles.items}>

    {products.map((el)=>(
      <div key={el.id}>
        <Link to={`/productDetails/${el.id}`} >
         <div className={styles.item} key={el.id}>
         <img className={styles.img} src={el.image} alt=""/> 
         <h3>{el.name}</h3>
         <p>{`₹${el.price}`}</p>
      </div>
      </Link>
      </div>
      
     
    ))}

  </div>
      
    </div>
  )
}

export default Products