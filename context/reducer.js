import {SET_USER, ADD_TO_CART, REMOVE_FROM_CART, USER_ERROR, EMPTY_CART} from './Types'


const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART :
      return {
        ...state,
        cart: [...state.cart, action.payload.item]
      };

    case REMOVE_FROM_CART:
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload}) as it's not in the cart!`
        );
      }
      return {
        ...state,
        cart: newCart
      }
      
      case SET_USER :
        // console.log(payload)
        return{
          ...state,
          user: action.payload
        }
        case USER_ERROR:
        return{
          ...state,
          user: null
        }
    case EMPTY_CART:
      return {
        ...state,
        cart: []
      }
      default:
      return state;
  }
};

export default reducer;
