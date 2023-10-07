import React, { useReducer } from 'react';
import CartContext from './cartContext';
import reducer from './reducer';
import { SET_USER, ADD_TO_CART, REMOVE_FROM_CART, USER_ERROR, EMPTY_CART } from './Types';


const State = (props) => {
  const initialState = {
    cart: [],
    user: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUser = (authUser) => {
      try {
        dispatch({
          type: SET_USER,
          payload: authUser,
        });
      } catch (err) {
        dispatch({
          type: USER_ERROR,
          payload: err,
        });
      };
  };

  const addToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
    console.log(item);
  };

  const removeFromCart = (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
};
 const emptyCart = () => {
     dispatch({
         type: EMPTY_CART
     })
 }
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        user: state.user,
        getUser,
        addToCart,
        removeFromCart,
          emptyCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default State;
