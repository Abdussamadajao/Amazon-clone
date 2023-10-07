import React, { useContext } from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import styles from '../styles/checkout.module.css';
import Subtotal from '../components/Subtotal';
import CheckoutProduct from '../components/CheckoutProduct';
import CartContext from '../context/cartContext';
import { loadStripe } from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'
const promise = loadStripe(
  'pk_test_51IrV7tEyFEUUCT1NYXoEg942nJLbM8RshnEpOz3GJRG6IR5RUKZYI2EeQzuAgL6sVZU6N3G5Lou3IkK0ntJfP3U200T40k3GaF'
)


const Checkout = () => {
  
  const cartContext = useContext(CartContext);
    
  const { cart, user } = cartContext;

  return (
    <>
    <div>
      <Head>
        <title>CheckOut</title>
      </Head>
      <Header />
    </div>
    <div className={styles.checkout}>
      <div className={styles.left}>
        <img src='/ad.jpg' alt='' className={styles.ad} />
        <div>
          {!!user ? <h3>{`Welcome ${user.email}`}</h3> : 'No User Logged In'}
          <h2 className={styles.title}>Your Shopping Cart</h2>
            {cart.map(item =>
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            )}

        </div>
      </div>
      <div className={styles.right}>
       <Subtotal />
      </div>
    </div>
    </>
  );
};

export default Checkout;
