import React, { Component } from "react";
import { connect } from "react-redux";

import "./CollectionItem.scss";
import CustomButton from "../../../Components/UI/CustomButton/CustomButton";
import * as actions from "../../../store/actions/indexActions";

class CollectionItem extends Component {
  render() {
    return (
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${this.props.item.imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{this.props.item.name}</span>
          <span className="price">{this.props.item.price}</span>
        </div>
        <CustomButton
          onClick={() => this.props.onAddItem(this.props.item)}
          inverted
        >
          ADD TO CART
        </CustomButton>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: item => dispatch(actions.addItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
