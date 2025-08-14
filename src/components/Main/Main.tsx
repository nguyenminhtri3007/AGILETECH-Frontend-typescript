import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Main.module.scss'
import { AllProductModel } from '../../data/models/allProduct.model';
import *as AllProductService from '../../data/services/allProduct.service'


const BestSellerScreen = () =>{

const [activeTab,setActiveTab] = useState <string> ("");
const [products,setProducts] = useState <AllProductModel[]>([]);
const [loading, setLoading] = useState (false);
const [startIndex, setStartIndex] = useState (0);

const maxVisible = 4;

useEffect(() =>{
  const fetchProducts = async () =>{
    setLoading(true)
    try {
      const response = await AllProductService.fetchAllProducts(new AllProductModel());
       const productList = Array.isArray(response)
          ? response
          : response?.products ?? [];
      setProducts(productList);

      if (productList.length > 0) {
          setActiveTab(productList[0].category ?? "");
        }
      
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
    fetchProducts();

  }, [])

   const allCategories = products.map(product => product.category);
   const validCategories = allCategories.filter((category): category is string => !!category);
   const uniqueCategoriesSet = new Set(validCategories);
   const categories = Array.from(uniqueCategoriesSet);
   const filteredProducts = products.filter(p => p.category === activeTab);

   const renderStars = (rating?: number) => {
    const fullStars = Math.round(rating ?? 0);
    return "⭐".repeat(fullStars);
  };

  const handlePrev = () => {
  setStartIndex(prev => Math.max(prev - 1, 0));
};

const handleNext = () => {
  setStartIndex(prev => Math.min(prev + 1, filteredProducts.length - maxVisible));
};

const visibleProducts = filteredProducts.slice(startIndex, startIndex + maxVisible);
 
 return (
    <div className={styles.container}>
      <div className={styles.bestseller}>
        <span>Best Selling Product</span>
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.tab} ${activeTab === category ? styles.active : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.productListWrapper }>

      <button 
        onClick={handlePrev} 
        disabled={startIndex === 0}
       className={styles.navBtn}
       >
       ←
     </button>

      <div className={styles.productList}>
        {loading ? (
          <div>Loading...</div>
        ) : visibleProducts.length > 0 ? (
          visibleProducts.map(product => (
            <div className={styles.productCard} key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div className={styles.productInfo}>
                <span className={styles.category}>{product.category}</span>
                <h4>{product.title}</h4>
                <div className={styles.stars}>{renderStars(product.rating)}</div>
                <div className={styles.bottom}>
                  <span className={styles.price}>${product.price}</span>
                  <button className={styles.addCard}>+</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Không có sản phẩm ở mục này</div>
        )}
      </div>

      <button 
       onClick={handleNext} 
       disabled={startIndex >= filteredProducts.length - maxVisible}
      className={styles.navBtn}
      >
      →
    </button>
    </div>
      <div className={styles.productAll}>
        {filteredProducts.length > 0 && <a href="#">View all products ⟶</a>}
      </div>
    </div>
  );
};

export default BestSellerScreen;