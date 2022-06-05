import React from 'react'
import styles from "../Component/aboutus.module.css"
const Aboutus = () => {
  return (
    <div>

<div className={styles.firstDiv}>
  <div className={styles.innerFirst}>
  <h6 className={styles.h6}>ABOUT US</h6>
 <h1 className={styles.h1}>Shopify powers millions of businesses worldwide</h1>
 <p className={styles.p}>The all-in-one commerce platform to start, run, and grow a business.</p>
  </div>

 <div>
   <img className={styles.img} src='https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-small-2a2faf4cb65f77ff8a7957d0f3f5c335a0d13a328f773d30ae252d81e8475dce.png' alt='firstImg'/>
 </div>
</div>

  <div className={styles.secondDiv}>
  <div>
   <img className={styles.img1} src='https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/snowdevil/snowdevil-about-online-store-sustainability@desktop-d45981b88381b90b17d60887fa0ad6429568d50b08b1d7fb6c5e86eabf7ee84a.png' alt='firstImg'/>
 </div>
  <div className={styles.innerFirst}>
  <h6 className={styles.h6}>SHOPIFY STORY</h6>
 <h1 className={styles.h1}>The first Shopify store was our own</h1>
 <p className={styles.p1}>Over a decade ago, we started a store to sell snowboards online. None of the ecommerce solutions at the time gave us the control we needed to be successful—so we built our own. Today, businesses of all sizes use Shopify, whether they’re selling online, in retail stores, or on-the-go.</p>
  </div>


  </div>
    </div>
  )
}

export default Aboutus