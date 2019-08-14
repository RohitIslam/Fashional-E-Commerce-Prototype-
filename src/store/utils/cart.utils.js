export const addItemToCart = (cartItems, cartItemToAdd) => {
  // searching if the added item exist in the cartItems array or not. If exist, than it will assign 'true' in the existingCartItem boolean variable for next process.

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // If existingCartItem is True, than it will again check if the added item exist in the cartItems array or not. If exist, than it will return a new object of cartItems and will increase the quantity of that added item buy 1. If it doesn't exist, than it will return a new array of existing items

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If existingCartItem is False, than it will return a new array of existing items and also add the new item with the base quantity of 1 as an object into the array

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; // quantity property gets attached for the first time since this if block won't run when it is a new item
};
