import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.firstDiv}>
        <div className={styles.innerFrstDiv}>
          <h5>About</h5>
          <h5> Careers</h5>
          <h5> Press and Media</h5>
          <h5> Shopify Plus</h5>
        </div>
      </div>

      <div className={styles.secondDiv}>
        <div className={styles.frstSecondDiv}>
          {" "}
          <h6 className={styles.h5}>ONLINE STORES</h6>
          <p className={styles.t} >Sell online</p>
          <p className={styles.p}>Features</p>
          <p className={styles.p}>Examples</p>
          <p className={styles.p}>Website builder</p>
          <p className={styles.p}>Online retail</p>
        </div>
        <div className={styles.secondSecondDiv}>
          <p className={styles.t}>Ecommerce website</p>
          <p className={styles.p}>Doman name</p>
          <p className={styles.p}>Themes</p>
          <p className={styles.p}>Shopping cart</p>
          <p className={styles.p}>Ecommerce hosting</p>
        </div>
        <div className={styles.secondSecondDiv}>
          <p className={styles.t}>Mobile commerce</p>
          <p className={styles.p}>Ecommerce software</p>
          <p className={styles.p}>Online store builder</p>
          <p className={styles.p}>Dropshipping Business</p>
          <p className={styles.p}>Store themes</p>
        </div>
        <div className={styles.frstSecondDiv}>
          {" "}
          <h6 className={styles.h5}>POINT OF SALE</h6>
          <p className={styles.t}>Point of sale</p>
          <p className={styles.p}>Features</p>
          <p className={styles.p}>Examples</p>
          <p className={styles.p}>Hardware</p>
        </div>
        <div className={styles.frstSecondDiv}>
          {" "}
          <h6 className={styles.h5}>SUPPORT</h6>
          <p className={styles.t}>24/7 support</p>
          <p className={styles.p}>Shopify Help Center</p>
          <p className={styles.p}>Shopify Community</p>
          <p className={styles.p}>API documentation</p>
          <p className={styles.p}>Free tools</p>
          <p className={styles.p}>Free stock photos</p>
          <p className={styles.p}>Websites for sale</p>
          <p className={styles.p}>Logo Maker</p>
          <p className={styles.p}>Business name generator</p>
          <p className={styles.p}>Research</p>
          <p className={styles.p}>Legal</p>
        </div>
        <div className={styles.frstSecondDiv}>
          {" "}
          <h6 className={styles.h5}>SHOPIFY</h6>
          <p className={styles.t}>Contact</p>
          <p className={styles.p}>Partner Program</p>
          <p className={styles.p}>Affiliate program</p>
          <p className={styles.p}>App developers</p>
          <p className={styles.p}>Investors</p>
          <p className={styles.p}>Blog topics</p>
          <p className={styles.p}>Community Events</p>
        </div>
      </div>
      <div className={styles.thirdDiv}>
        <div className={styles.iconDiv}>
          <img className={styles.img} src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="facebook"/>
          <img className={styles.img} src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="twitter"/>
          <img className={styles.img} src="https://cdn-icons-png.flaticon.com/512/187/187209.png" alt="youtube"/>
          <img className={styles.img} src="https://cdn-icons-png.flaticon.com/512/408/408758.png" alt="instagram"/>
          <img className={styles.img} src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="linkedin"/>
          <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/145/145808.png" alt="pinterest"/>
        </div>
        <div className={styles.contactDiv}>
          <p>Terms of Service Privacy Policy Change your country or region.USA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

//const [input,setInput] = useState("")
// const ref = useRef()
// <div>Footer
//     <input  onChange={(e)=>setInput(e.target.value)}/>
//     <button onClick={()=>console.log(ref.current=input)}>Add</button>
//     <div>{input}</div>
//     <div>{ref.current}</div>
// </div>
