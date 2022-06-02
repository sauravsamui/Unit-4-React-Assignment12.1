import React from 'react'
import {Link} from "react-router-dom"
import styles from "./navbar.module.css"
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
const Navbar = () => {
  const {isAuth,toggle} = useContext(AuthContext)
  return (
    <nav  className="navbar navbar-dark bg-dark">
        <div id={styles.navbar}>
      <Link className={styles.link} to={"/"}>Home</Link>
      <Link className={styles.link} to={"/products"}>Products</Link>
      <button type="button" className="btn btn-outline-secondary"
       onClick={()=>{toggle()}}
      >{isAuth?"Logout":"Login"}</button>
      </div>
      
</nav>

  )
}

export default Navbar