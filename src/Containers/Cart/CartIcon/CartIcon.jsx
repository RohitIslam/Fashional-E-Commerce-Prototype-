import React, { Component } from "react";
import { connect } from "react-redux";

import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../../assets/images/shoppingBag.svg";
import * as actions from "../../../store/actions/indexActions";

class CartIcon extends Component {
  render() {
    return (
      <div className="cart-icon" onClick={this.props.onToggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleCartHidden: () => dispatch(actions.toggleCartHidden())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
