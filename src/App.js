import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Shop from "./Containers/Shop/Shop";
import Header from "./Containers/Header/Header";
import SignInAndUp from "./Components/SignInAndUp/SignInAndUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import * as actions from "./store/actions/indexActions";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    //checking users subscription or authentication state changing in firebase (Open Subscription)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //createUserProfileDocument() function returns the userRef. [Check the firebase.utils.js file]
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    // closing the open subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/signin"
            exact
            render={() =>
              !this.props.currentUser ? <SignInAndUp /> : <Redirect to="/" />
            }
          />
          <Route path="/shop" exact component={Shop} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(actions.setCurrentUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
