import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Shop from "./Containers/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndUp from "./Components/SignInAndUp/SignInAndUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/signin" exact component={SignInAndUp} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
