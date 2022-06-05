import React from 'react'
import { useState } from 'react'
import styles from "../Component/faq.module.css"
import FaqDetails from '../Component/FaqDetails'
const FAQ = () => {
  const [show,setShow] = useState("")

  let handleShow =(e)=>{
    let {name} = e.target;
    setShow(name)
  }
  return (
    <div>
      <div className={styles.firstDiv}>
        <h2>F A Q</h2>
        <p>Can't find the answer you are looking for? We have shared some of our most frequently asked questions to help you out.</p>
      </div>
      <div className={styles.secondDiv}>
        <div className={styles.question}>
        <div className={styles.topic1} ><h5>PAYMENTS</h5></div>
         <div className={styles.topic}><h5>DELIVERY</h5></div>
         <div className={styles.topic}><h5>ORDERS</h5></div>
         <div className={styles.topic}><h5>REFUNDS</h5></div>
         <div className={styles.topic}><h5>PRODUCT AND STOCK</h5></div>
         <div className={styles.topic}><h5>ACCOUNT</h5>
         </div>
        </div>
         
         <div className={styles.details}>
           <div className={styles.detailsDiv}>What payment methods do you accept? <button name="first" className={styles.btn1} onClick={handleShow}>+</button></div>
           {show=="first"?<FaqDetails data={"We Accept all type of payments."}/>:""}
           <div className={styles.detailsDiv}>Do you sell gift cards? <button name="second" className={styles.btn1} onClick={handleShow}>+</button></div>
           {show=="second"?<FaqDetails data={"Yes, there are lots of variety available."}/>:""}
           <div className={styles.detailsDiv}>How do I purchase gift cards? <button name="third" className={styles.btn1} onClick={handleShow}>+</button></div>
           {show=="third"?<FaqDetails data={"Go to product and choose gift."}/>:""}
           <div className={styles.detailsDiv}>Why I haven't received my gift card? <button name="fourth" className={styles.btn1} onClick={handleShow}>+</button></div>
           {show=="fourth"?<FaqDetails data={"Please, write your quiry, we will reach out to you soon."}/>:""}
           <div className={styles.detailsDiv}>I lost my gift card. Can I get replacement? <button name="fifth" className={styles.btn1} onClick={handleShow}>+</button></div>
           {show=="fifth"?<FaqDetails data={"Yes, you need to pay some charges."}/>:""}
         </div>
      </div>
      
    </div>
  )
}

export default FAQ