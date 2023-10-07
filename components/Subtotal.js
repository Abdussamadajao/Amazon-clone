import styles from '../styles/Subtotal.module.css';
import CurrencyFormat from 'react-currency-format'
import CartContext from '../context/cartContext';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';


const Subtotal = () => {
  const router = useRouter()
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

  const payment = (e) => {
    e.preventDefault()
    router.push('/payment')
  }

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong>{value}</strong>
            </p>
            <small className={styles.gift}>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
          />
          
        <button onClick={payment}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
