import React, { useState } from "react";
import styles from './Header.module.scss';
import Cart from '../../assets/Icon/Cart.png';
import Heart from '../../assets/Icon/Heart.png';
import Search from '../../assets/Icon/Search.png';
import Avater from '../../assets/Icon/Ellipse.png'
import Banner from '../../assets/banner1.png'
import { AppConfig } from "../../common/config/app.config";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { MdDelete } from "react-icons/md";

const Header = () =>{
  const { state, dispatch } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false)
    const navigate = useNavigate();
    const appConfig = new AppConfig();

    const avatar = appConfig.getImage() || Avater

  const handleLogout = () =>{
      appConfig.clear();
      navigate('/')
       }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }
  
  const closeCart = () => {
    setIsCartOpen(false);
  }

  const calculateTotal = () => {
    return state.items.reduce((total, item) => {
      return total + ((item.price ?? 0) * item.quantity);
    }, 0);
  }
  

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  }
  
  const handleIncreaseQty = (id: number) => {
    dispatch({ type: "INCREASE_QTY", payload: id });
  }
  
  const handleDecreaseQty = (id: number) => {
    dispatch({ type: "DECREASE_QTY", payload: id });
  }
  
  const handleRemoveItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  const handleDelete = () => {
    alert("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?");
  };
  
  const handleCheckout = () => {
   
    alert(`Thanh toán ${calculateTotal().toFixed(2)}$ thành công!`);
    dispatch({ type: "CLEAR_CART" });
    setIsCartOpen(false);
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
          <span style={{ position: "relative" }}>
            <img 
              src={Cart} 
              alt="cart" 
              style={{ cursor: "pointer" }}
              onClick={toggleCart}
            />
            {getTotalItems() > 0 && (
              <span className={styles.iconCart}>
                {getTotalItems()}
              </span>
            )}
          </span>
          <span><img src={Heart} alt="heart" /></span>
          <span onClick={handleLogout}><img src={avatar} alt="avatar" /></span>
        </div>
    </div>
    {isCartOpen && (
        <div className={styles.cartOverlay} onClick={closeCart}>
          <div className={styles.cartModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.cartHeader}>
              <h3>Shopping Cart</h3>
              <button className={styles.closeBtn} onClick={closeCart}>×</button>
            </div>
            
            <div className={styles.cartContent}>
              {state.items.length === 0 ? (
                <div className={styles.emptyCart}>
                  <p>Giỏ hàng của bạn đang trống</p>
                </div>
              ) : (
                <>
                  <div className={styles.cartItems}>
                    {state.items.map(item => (
                      <div key={item.id} className={styles.cartItem}>
                        <img src={item.thumbnail} alt={item.title} className={styles.itemImage} />
                        <div className={styles.itemInfo}>
                          <h4>{item.title}</h4>
                          <p className={styles.itemCategory}>{item.category}</p>
                          <div className={styles.itemPrice}>${item.price}</div>
                        </div>
                        <div className={styles.itemControls}>
                          <div className={styles.quantityControls}>
                            <button 
                              onClick={() => handleDecreaseQty(item.id ?? 0)}
                              className={styles.qtyBtn}
                            >
                              -
                            </button>
                            <span className={styles.quantity}>{item.quantity}</span>
                            <button 
                              onClick={() => handleIncreaseQty(item.id ??0)}
                              className={styles.qtyBtn}
                            >
                              +
                            </button>
                          </div>
                          <button 
                            onClick={() => handleRemoveItem(item.id ?? 0)}
                            className={styles.removeBtn}
                          >
                           <MdDelete size={28}
                           onClick={handleDelete}
                           />
                          </button>
                        </div>
                        <div className={styles.itemTotal}>
                          ${((item.price ?? 0) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className={styles.cartFooter}>
                    <div className={styles.totalSection}>
                      <div className={styles.totalItems}>
                        Tổng số sản phẩm: {getTotalItems()}
                      </div>
                      <div className={styles.totalPrice}>
                        Tổng tiền: <strong>${calculateTotal().toFixed(2)}</strong>
                      </div>
                    </div>
                    <div className={styles.checkoutActions}>
                      <button 
                        className={styles.continueBtn}
                        onClick={closeCart}
                      >
                        Tiếp tục mua sắm
                      </button>
                      <button 
                        className={styles.checkoutBtn}
                        onClick={handleCheckout}
                      >
                        Thanh toán
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
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