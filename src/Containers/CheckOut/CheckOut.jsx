import React, { Component } from "react";
import { connect } from "react-redux";

import "./CheckOut.scss";
import {
  selectCartItems,
  selectCartTotalPrice
} from "../../store/selectors/cart.selectors";
import CheckOutItem from "./CheckOutItem/CheckOutItem";

class CheckOut extends Component {
  render() {
    return (
      <div className="checkout">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {this.props.cartItems.map(cartItem => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">
          <span>TOTAL ${this.props.totalPrice}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state),
    totalPrice: selectCartTotalPrice(state)
  };
};

export default connect(mapStateToProps)(CheckOut);
