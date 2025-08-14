import React from "react";
import styles from './Footer.module.scss'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


const FooterScreen = () =>{
  return(
    <div className={styles.footer}>
      <div className={styles.left}>
        <h2>Panto</h2>
        <p>The advantage of hiring a workspace with us is that givees you comfortable 
          service and all-around facilities.</p>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h3>Services</h3>
          <ul>
            <p>Email Marketing</p>
            <p>Campaigns</p>
            <p>Branding</p>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Furniture</h3>
          <ul>
            <p>Beds</p>
            <p>Chair</p>
            <p>All</p>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Follow Us</h3>
          <ul>
            <p><FaFacebookSquare/>Facebook</p>
            <p><FaSquareTwitter/>  Twitter</p>
            <p><FaSquareInstagram/> Instagram</p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterScreen;