import React from 'react'
import {Link} from "react-router-dom"
import styles from "./navbar.module.css"
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
const Navbar = () => {
  const {isAuth,toggle} = useContext(AuthContext)
  return (
    <>
    <div className={styles.offer}>🇦🇺 Free Australia wide Shipping - Flat Rate Global Shipping 🌏</div>
    <nav id={styles.navbar1} className="navbar navbar">
        <div id={styles.navbar}>
      <Link className={styles.link} to={"/"}>Home</Link>
      <Link className={styles.link} to={"/products"}>Products</Link>
       <Link className={styles.link} to={"/aboutus"}>About US</Link>
       <Link className={styles.link} to={"/faq"}>FAQ</Link>
       <Link className={styles.link} to={"/contactUs"}>ContactUs</Link>
      <button type="button" className="btn btn-danger"
       onClick={()=>{toggle()}}
      >{isAuth?"Logout":"Login"}</button>
      </div>
      
</nav>
</>
  )
}

export default Navbar