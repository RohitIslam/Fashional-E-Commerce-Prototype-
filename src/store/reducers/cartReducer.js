import * as actionTypes from "../actions/actionTypes";

const initialState = {
  hidden: true
};

const cartReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentState,
        hidden: !currentState.hidden
      };
    default:
      return currentState;
  }
};

export default cartReducer;
