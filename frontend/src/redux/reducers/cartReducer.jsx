import * as actionHype from '../constants/cartConstatnt';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionHype.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartItems.find(product => product.id === item.id);

      if (exist) {
        // update existing item
        return {
          ...state,
          cartItems: state.cartItems.map(product =>
            product.id === item.id ? item : product
          ),
        };
      } else {
        // add new item
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionHype.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(product => product.id !== action.payload),
      };
       case actionHype.INCREMENT_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case actionHype.DECREMENT_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),   // REMOVE if quantity is now 0
      };
    case actionHype.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    // ...other cases
    default:
      return state;
  }
  }
