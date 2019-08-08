import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./Header.scss";

const Header = props => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;