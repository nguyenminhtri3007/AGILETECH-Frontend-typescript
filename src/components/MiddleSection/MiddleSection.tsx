import React from "react";
import styles from './MiddleSection.module.scss';
import AvatarBanner1 from '../../assets/banner4.png';
import AvatarBanner2 from '../../assets/banner5.png';
import Avatarbanner3 from '../../assets/banner6.png';
import Avatarbanner4 from '../../assets/banner7.png';

const MiddleSection =  ()  =>{
  return(
    <>
    
    <div className = {styles.experience}>
      <div className={styles.left}>
        <img src={AvatarBanner1}/>
      </div>
      <div className={styles.right} >
        <h4>experiences</h4>
        <h3>we provide you <br/>
          the best experience</h3>
        <p>You don’t have to worry about the result because all <br/>
          of these interiors are made by people who are professionals <br/>
          in their fields with an elegant and lucurious style and <br/>
          with premium quality materials
        </p>
        <a href="#">More Info →</a>
      </div>
    </div>

    <div className={styles.material}>
      <div className={styles.materialFelf}>
          <h2>Materials</h2>
          <h3>
            Very serious <br/>
             materials for making <br/>
             furniture
          </h3>
          <p>Because panto was very serious about designing furniture for our <br/>
             environment, using a very expensive and famous capital but at a  <br/>
              relatively low price
        </p>
        <a href="#">More Info →</a>
      </div>
      <div className={styles.materialRight}>
        <div className= {styles.leftimg}>
             <img src = {AvatarBanner2}/>
             <img src={Avatarbanner3} />
        </div>
        <div className={styles.rightimg}>
             <img src= {Avatarbanner4}/>
        </div>
             
           
      </div>

    </div>
    </>
  )
}

export default MiddleSection;