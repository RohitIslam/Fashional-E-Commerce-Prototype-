import React, { Component } from "react";

import ShopData from "./ShopData";
import CollectionPreview from "../Collections/CollectionPreview/CollectionPreview";

class Shop extends Component {
  state = {
    collections: ShopData
  };
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          //{id, ...otherCollectionProps} => Object Distructuring
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
