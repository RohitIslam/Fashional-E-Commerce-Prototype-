import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <div>
      <Route path="/" exact component={Homepage} />
    </div>
  );
}

export default App;
