import Header from '../components/Header';
import Order from '../components/Order';
import styles from '../styles/Orders.module.css';
import Head from 'next/head';
import { useState, useEffect,  useContext  } from 'react';
import { db } from '../firebase';
import CartContext from '../context/cartContext';

const Orders = () => {
  const cartContext = useContext(CartContext);
  const { user } = cartContext;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

  return (
    <>
      <div>
        <Head>
          <title>Orders</title>
        </Head>
        <Header />
      </div>
      <div className={styles.orders}>
        <h1>Yours Orders</h1> 

        <div className={styles.order}>
            {orders.map(order => {
                <Order order={order} />
            })}
        </div>
      </div>
    </>
  );
};

export default Orders;
