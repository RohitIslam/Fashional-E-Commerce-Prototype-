import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currentUser: null
};

const useReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload
      };
    default:
      return currentState;
  }
};

export default useReducer;
