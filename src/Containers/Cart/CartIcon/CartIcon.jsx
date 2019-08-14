import React, { Component } from "react";
import { connect } from "react-redux";

import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../../assets/images/shoppingBag.svg";
import * as actions from "../../../store/actions/indexActions";
import { selectCartItemsCount } from "../../../store/selectors/cart.selectors";

class CartIcon extends Component {
  render() {
    return (
      <div className="cart-icon" onClick={this.props.onToggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{this.props.itemCount}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleCartHidden: () => dispatch(actions.toggleCartHidden())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
