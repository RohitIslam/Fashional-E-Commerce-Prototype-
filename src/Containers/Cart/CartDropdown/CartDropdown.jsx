import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./CartDropdown.scss";
import CustomButton from "../../../Components/UI/CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../../store/selectors/cart.selectors";

import * as actions from "../../../store/actions/indexActions";

const CartDropdown = props => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.cartItems ? (
          props.cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          props.history.push("/checkout");
          props.dispatch(actions.toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
