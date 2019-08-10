import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Shop from "./Containers/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndUp from "./Components/SignInAndUp/SignInAndUp";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    //checking users subscription or authentication state changing in firebase (Open Subscription)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    // closing the open subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/signin" exact component={SignInAndUp} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
