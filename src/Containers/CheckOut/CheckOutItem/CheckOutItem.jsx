import React, { Component } from "react";
import { connect } from "react-redux";

import "./CheckOutItem.scss";
import * as actions from "../../../store/actions/indexActions";

class CheckOutItem extends Component {
  render() {
    return (
      <div className="checkout-item">
        <div className="image-container">
          <img src={this.props.cartItem.imageUrl} alt="item" />
        </div>
        <span className="name">{this.props.cartItem.name}</span>
        <span className="quantity">
          <div
            className="arrow"
            onClick={() => this.props.onRemoveItemQuantity(this.props.cartItem)}
          >
            &#10094;
          </div>
          <span className="value">{this.props.cartItem.quantity}</span>
          <div
            className="arrow"
            onClick={() => this.props.onAddItem(this.props.cartItem)}
          >
            &#10095;
          </div>
        </span>
        <span className="price">{this.props.cartItem.price}</span>
        <div
          className="remove-button"
          onClick={() => this.props.onRemoveItem(this.props.cartItem)}
        >
          &#10005;
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: item => dispatch(actions.addItem(item)),
    onRemoveItem: item => dispatch(actions.removeItem(item)),
    onRemoveItemQuantity: item => dispatch(actions.removeItemQuantity(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
