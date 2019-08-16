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
        <span className="quantity">{this.props.cartItem.quantity}</span>
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
    onRemoveItem: item => dispatch(actions.removeItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
