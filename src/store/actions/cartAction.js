import * as actionTypes from "./actionTypes";

export const toggleCartHidden = () => {
  return {
    type: actionTypes.TOGGLE_CART_HIDDEN
  };
};

export const addItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item
  };
};

export const removeItemQuantity = item => {
  return {
    type: actionTypes.REMOVE_ITEM_QUANTITY,
    payload: item
  };
};
