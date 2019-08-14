import React from "react";

import "./CartItem.scss";

const CartItem = props => {
  const { name, price, quantity, imageUrl } = props.item;
  return (
    <div className="cart-item ">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
