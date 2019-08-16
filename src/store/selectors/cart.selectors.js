import { createSelector } from "reselect";

const selectCart = state => state.cart; //this function is called input Selector because it doesn't use createSelector

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
); //this function is called output Selector because it uses createSelector

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
