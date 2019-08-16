import * as actionTypes from "../actions/actionTypes";
import { addItemToCart, removeItemQuantityFromCart } from "../utils/cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentState,
        hidden: !currentState.hidden
      };
    case actionTypes.ADD_ITEM:
      return {
        ...currentState,
        cartItems: addItemToCart(currentState.cartItems, action.payload)
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...currentState,
        cartItems: currentState.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case actionTypes.REMOVE_ITEM_QUANTITY:
      return {
        ...currentState,
        cartItems: removeItemQuantityFromCart(
          currentState.cartItems,
          action.payload
        )
      };
    default:
      return currentState;
  }
};

export default cartReducer;
