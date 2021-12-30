import React from "react";
import Login from "./Login/Login";
import Final from "./components/form/final";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/final" component={Final} />
      </Switch>
    </div>
  );
};

export default App;
