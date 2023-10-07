import styles from '../styles/CheckoutProduct.module.css';
import CartContext from '../context/cartContext';
import React, { useContext } from 'react';

const CheckoutProduct = ({ id, image, title, rating, price }) => {
  const cartContext = useContext(CartContext);
  
  const { removeFromCart } = cartContext;

  const remove = () => {
    removeFromCart(id)
  }
  return (
    <div className={styles.checkoutProduct}>
      <img src={image} alt='' className={styles.image} />

      <div className={styles.info}>
      
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className={styles.rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={remove}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
