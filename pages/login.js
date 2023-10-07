import Head from 'next/head';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { auth } from '../firebase';
import { useRouter } from 'next/router';

const login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      router.push('/');
    })
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          router.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.login}>
      <Head>
        <title>Login</title>
      </Head>
      <Link href='/'>
        <a>
          <img src='amazon-2.svg' alt='' className={styles.logo} />
        </a>
      </Link>
      <div className={styles.container}>
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={signIn} className={styles.signInBtn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className={styles.RegBtn}>
          Create a new Account
        </button>
      </div>
    </div>
  );
};

export default login;
