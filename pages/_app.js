import '../styles/globals.css';
import State from '../context/State';
import { loadStripe } from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'


const promise = loadStripe(
  'pk_test_51IrV7tEyFEUUCT1NYXoEg942nJLbM8RshnEpOz3GJRG6IR5RUKZYI2EeQzuAgL6sVZU6N3G5Lou3IkK0ntJfP3U200T40k3GaF'
)


function MyApp({ Component, pageProps }) {
  return (
    <State>
     <Elements stripe={promise}>
        <Component {...pageProps} />
          </Elements>
    </State>
  );
}

export default MyApp;