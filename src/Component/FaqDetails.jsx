import React from 'react'
import styles from "../Component/faq.module.css"
const FaqDetails = ({data}) => {
  return (
    <div className={styles.detailsInnerDiv}>
        {data}
    </div>
  )
}

export default FaqDetails