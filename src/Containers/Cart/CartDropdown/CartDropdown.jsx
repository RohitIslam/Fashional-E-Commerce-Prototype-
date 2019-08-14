import React from "react";
import { connect } from "react-redux";

import "./CartDropdown.scss";
import CustomButton from "../../../Components/UI/CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

const CartDropdown = props => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps)(CartDropdown);
