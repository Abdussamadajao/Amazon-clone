import React, { useState, useContext, useEffect } from 'react';
import styles from '../styles/Product.module.css';
import CartContext from '../context/cartContext';

const Product = ({ id, title, rating, image, price }) => {
  const cartContext = useContext(CartContext);

  const { addToCart } = cartContext;

  const Cart = (e) => {
    addToCart({
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className={styles.product}>
      <div className={styles.row}>
        <img src={image} alt='' />
      </div>
      <div className={styles.info}>
        <strong className={styles.strong}>{title}</strong>
        <p className={styles.price}>
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className={styles.rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      <button onClick={Cart}>Add To Cart</button>
      </div>

    </div>
  );
};

export default Product;
