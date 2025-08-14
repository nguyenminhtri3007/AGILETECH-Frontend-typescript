import React from "react";
import styles from './Header.module.scss';
import Cart from '../../assets/Icon/Cart.png';
import Heart from '../../assets/Icon/Heart.png';
import Search from '../../assets/Icon/Search.png';
import Avater from '../../assets/Icon/Ellipse.png'
import Banner from '../../assets/banner1.png'
import { AppConfig } from "../../common/config/app.config";
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate();
    const appConfig = new AppConfig();

    const avatar = appConfig.getImage() || Avater

  const handleLogout = () =>{
      appConfig.clear();
      navigate('/')
       }

  return(
    <>
    <div className={styles.header}>
      <div className={styles.logo}>Funiro. </div>
      <div className={styles.nav}>Product</div>
      <div className={styles.nav}>Rooms</div>
      <div className={styles.nav}>Inspirations</div>
      <div className={styles.search}>
        <input type="text" placeholder="Search for minimalist chair" />
         <img src={Search} alt="search icon" />
      </div>
      <div className={styles.icons}>
        <span > <img src={Cart}/> </span>
        <span> <img src = {Heart}></img></span>
        <span onClick={handleLogout}> <img src={avatar}/></span>
      </div>
    </div>
    <div className={styles.banner}>
       <img src={Banner}/>
    </div>
    <div className={styles.footer}>
      <div className={styles.left}>Why <br /> Choosing Us</div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h3>Luxury facilities</h3>
          <p>
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <a href="#">More Info →</a>
        </div>
        <div className={styles.section}>
          <h3>Affordable Price</h3>
          <p>
            You can get a workspace of the highest quality at an affordable price
            and still enjoy the facilities that are only here.
          </p>
          <a href="#">More Info →</a>
        </div>
        <div className={styles.section}>
          <h3>Many Choices</h3>
          <p>
            We provide many unique workspace choices so that you can choose the
            workspace to your liking.
          </p>
          <a href="#">More Info →</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header