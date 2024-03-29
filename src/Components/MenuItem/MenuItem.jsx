import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = props => {
  return (
    <div
      className={`${props.size} menu-item`}
      onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
      //`${props.match.url}${props.linkUrl}` === /matchUrl/linkUrl
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.imageUrl})` }} //using javascript template strings here
      />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
