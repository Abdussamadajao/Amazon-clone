import { Search, ShoppingCart } from '@material-ui/icons';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { auth } from '../firebase';
import CartContext from '../context/cartContext';
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const { cart, user, getUser } = cartContext;

  const handleAuth = () =>{
   if(user) {
     auth.signOut()
   }
  }

 const Checkout = (e) => {
   e.preventDefault()
   router.push('/checkout')
 }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      getUser(authUser)
      console.log(authUser)
    })
  }, [])

  return (
    <div className={styles.header}>
      <Link href='/'>
        <a>
          <img className={styles.logo} src='/amazon.png' alt='' />
        </a>
      </Link>
      <div className={styles.search}>
        <input type='text' className={styles.searchInput} />
        <Search className={styles.search_icon} />
      </div>
      <div className={styles.headerNav}>
        <Link href='/login'>
          <a>
            <div onClick={handleAuth} className={styles.option}>
            {!!user ? <span className={styles.optionLineOne}>{`Hello ${user.email}`}</span> : 'Hello'}
              <span className={styles.optionLineTwo}>
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </a>
        </Link>
        <div className={styles.option}>
          <span className={styles.optionLineOne}>Return</span>
          <span className={styles.optionLineTwo}>& Order</span>
        </div>
        <div className={styles.option}>
          <span className={styles.optionLineOne}>Your</span>
          <span className={styles.optionLineTwo}>Prime</span>
        </div>
          <a onClick={Checkout}>
            <div className={styles.optionCart} >
              <ShoppingCart />
              <span
                className={styles.optionLineTwo}
                className={styles.cartCount}
              >
                {cart?.length}
              </span>
            </div>
          </a>
      </div>
    </div>
  );
};

export default Header;
