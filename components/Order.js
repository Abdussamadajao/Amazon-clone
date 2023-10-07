import styles from '../styles/Order.module.css';
import moment from 'moment'
import CheckoutProduct from '../components/CheckoutProduct';
import CartContext from '../context/cartContext';


const Order = ({ order }) => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;
    console.log(order)
    return (
        <div className={styles.order}>
            <h1>order</h1>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className={styles.id}>
            <small>{order.id}</small>
        </p>
        {order.data?.cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
        </div>
    )
}



export default Order