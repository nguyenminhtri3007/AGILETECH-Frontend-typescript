import React, { useState } from "react";
import styles from './Main.module.scss';


const BestSellerScreen = () =>{
  const tabs = ["Chair", "Beds", "Sofa", "Lamp" ]
  type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
};

type ProductData = Record<"Chair" | "Beds" | "Sofa" | "Lamp", Product[]>;
  const productsData : ProductData  = {
Chair : [
    {id: 1, name:"Sakarias Armchair", price: 444, img :require("../../assets/product/chair1.png")},
    {id: 2, name:"Baltsar Chair", price: 444, img :require("../../assets/product/chair2.png")},
    {id: 3, name:"Anjay Chair", price: 444, img : require('../../assets/product/chair3.png')},
    {id: 4, name:"Nyantuy Chair", price: 444, img : require ("../../assets/product/chair4.png")}
  ],
Beds : [
    {id: 1, name:"Sakarias beds", price: 555, img : require("../../assets/product/chair4.png")},
    {id: 2, name:"Baltsar beds", price: 555, img : require ("../../assets/product/chair3.png") },
    {id: 3, name:"Anjay beds", price: 555, img : require ("../../assets/product/chair2.png") },
    {id: 4, name:"Nyantuy beds", price: 555, img : require ("../../assets/product/chair1.png")}
  ],
  Sofa:[

  ],
Lamp:[

]

  }

const [activeTab, setActiveTab] = useState<"Chair" | "Beds" | "Sofa" | "Lamp">("Chair");

  return(
    <>
    <div className={styles.container}>
      <div className={styles.bestseller} >
        <span>Best Selling Product</span>
      </div>
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button 
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab as "Chair" | "Beds" | "Sofa" | "Lamp")}
          >
              {tab}
          </button>         
        ))}
      </div>
      </div>
       <div className={styles.productList}>
        {productsData[activeTab].length > 0 ? (
          productsData[activeTab].map((product: Product) => (
          <div className= {styles.productCard} key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className={styles.productInfo}>
              <span className={styles.category}>{activeTab}</span>
              <h4>{product.name}</h4>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <div className={styles.bottom}>
                <span className={styles.price}>${product.price}</span>
                <button className={styles.addCard}>+</button>
              </div>
            </div>
          </div>
          
        )) 
      ): (
          <div>Không có sản phẩm ở mục này</div>
        )
        }
      </div>
      <div className={styles.productAll}>
        {productsData[activeTab].length > 0 ?(
          <a href="#">Views all product ⟶</a>
        ): ("")
      }
      </div>
    </div>

 
    </>
  )
}

export  default BestSellerScreen;
