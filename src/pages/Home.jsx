import React from 'react'
import styles from "../Component/home.module.css"
import {useNavigate} from "react-router-dom"
const Home = () => {
  const navigate = useNavigate()
  let handleRedirect=()=>{
    navigate("/products")
    
  }
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h1}>Buy everything at oneplace</h1>
        <div className={styles.imgDiv}>
          <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/blue-tokai/home-example-small-4144844351e226a9896cffee4bebdaeecb17897116c33a753bfd086b8b621e74.jpg" alt='img' onClick={handleRedirect}/>
          <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/quirksmith/home-example-small-8b1c6b138414b76150e6e00f5143c4301a07b708aa6113dd7096f4340ddfecad.jpg" alt='img' onClick={handleRedirect}/>
          <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/crossbeats/home-example-small-099933088cbe804543fbb1b0963a5d0a16365e73e6000949b5b0ab2bf4b21503.jpg" alt='img' onClick={handleRedirect}/>
          <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/mcaffeine/home-example-small-26afc247af7a3a7b1c9c585a645ccdff26e76156e98be7d9ff0fe9ecd4d3b675.jpg" alt='img' onClick={handleRedirect}/>
          <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/bunaai/home-example-small-4575b175c798e22af5531bae02621396add507433f771db37b1515e9941f8a45.jpg" alt='img' onClick={handleRedirect}/>
        </div>
    </div>
  )
}

export default Home