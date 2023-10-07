import Header from '../components/Header';
import styles from '../styles/Payment.module.css';
import Head from 'next/head';
import CartContext from '../context/cartContext';
import CheckoutProduct from '../components/CheckoutProduct';
import Link from 'next/link';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState, useEffect,  useContext  } from 'react';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import { useRouter } from 'next/router';
import { db } from '../firebase'


const payment = () => {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const { cart, user } = cartContext;

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log('THE SECRET IS >>>', clientSecret);
  console.log('👱', user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        router.replace('/orders');
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

  return (
    <>
      <div>
        <Head>
          <title>Payment</title>
        </Head>
        <Header />
      </div>
      <div className={styles.payment}>
      <div className={styles.container}>
      <h1>
            Checkout ({' '}
            {!!cart ? (
              <Link href='/checkout'>
                <a>{` ${cart.length} items`}</a>
              </Link>
            ) : (
              'No user Logged In'
            )}
            )
          </h1>

        {/* Payment section - delivery address */}
        <div className={styles.section}>
            <div className={styles.title}>
            <h3>Delivery Address</h3>
          </div>
          <div className={styles.address}>
          {!!user ? <p>{`${user.email}`}</p> : ''}
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className={styles.section}>
            <div className={styles.title}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={styles.address}>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className={styles.section}>
            <div className={styles.title}>
            <h3>Payment Method</h3>
          </div>
          <div className={styles.details}>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className={styles.price}>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default payment;