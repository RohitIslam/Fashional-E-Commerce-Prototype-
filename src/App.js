import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Shop from "./Containers/Shop/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
