import React from 'react'
import { useState } from 'react'
import styles from "../Component/contactus.module.css"
const ContactUs = () => {
  const [contact,setContact] = useState(false)

let handleSubmit=(e)=>{
e.preventDefault();
setContact(true)
}


  return (
    <div>
      <div className={styles.imgDiv}>
    
      </div>
     {contact?<div className={styles.show}><h1>We will reachout to you very soon! </h1></div>:<div className={styles.formDiv}>
        <h2 className={styles.h2}>Contact Our Customer Service Team</h2>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
  <label className={styles.label} >Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" />
    <label  className={styles.label} >Email<span>*</span></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    <label  className={styles.label} >Subject<span>*</span></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Example: sizing info"/>
  </div>
  <div className="form-group">
    <label  className={styles.label} >Contact Reason</label>
    <select className="form-control" id="exampleFormControlSelect1" >
      <option disabled selected hidden>Select Option</option>
      <option>General Inquiry</option>
      <option>Order Issues</option>
      <option>Repair</option>
   
    </select>
  </div>
  <div className="form-group">
    <label  className={styles.label} >How Can We Help?<span>*</span></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <h6 className={styles.h6}>If inquiring about a repair please upload image(s) here.</h6>
    <label className={styles.label1}>
      select File
      <input className={styles.input} type="file" placeholder='select'/>
    </label>
    <br/>
    <br/>
    <br/>
   <button className={styles.btn} type='submit'>SUBMIT</button>
</form>
      </div>}
      
    </div>
  )
}

export default ContactUs