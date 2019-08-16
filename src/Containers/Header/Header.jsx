import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../Cart/CartIcon/CartIcon";
import CartDropdown from "../Cart/CartDropdown/CartDropdown";
import { selectCartHidden } from "../../store/selectors/cart.selectors";
import { selectCurrentUser } from "../../store/selectors/user.selectors";
// import * as actions from "../../store/actions/indexActions";

class Header extends Component {
  render() {
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
          {this.props.currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {this.props.hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
  };
};

export default connect(mapStateToProps)(Header);
